import { useCallback, useEffect, useRef ,useState } from 'react';
import { Client, frameCallbackType, IFrame, StompSubscription, messageCallbackType, IMessage } from '@stomp/stompjs';
import TicketMessageRequestDTO from '../components/shared/Interfaces/TicketMessageRequestDTO';
import TicketMessageResponseDTO from '../components/shared/Interfaces/TicketMessageResponseDTO';
import { Api } from '../Api';


const useChat = (ticketId: number | undefined, senderId: number): [TicketMessageResponseDTO[],
                                                                   (inputValue: string) => void,
                                                                   boolean] => {

    let stompClient = useRef<Client | null>(null);

    let stompSubscription = useRef<StompSubscription | null>(null);

    const [messages, setMessages] = useState<TicketMessageResponseDTO[]>([]);

    const [ messagesWereFetched, setMessagesWereFetched ] = useState<boolean>(false);

    const [chatConnected, setChatConnected] = useState<boolean>(false);

    const onConnect: frameCallbackType = useCallback(() => {
        
        if(stompClient.current !== null && ticketId !== undefined) {

            stompSubscription.current = stompClient.current.subscribe(`/topic/ticket/${ticketId}`, onMessageReceived);

        } else {

            alert('Não foi possível conectar ao chat.');

        }

    }, [ticketId]);

    const onDisconnect = useCallback(() => {

        if(stompSubscription.current !== null) {
            
            stompSubscription.current.unsubscribe();

        }

        if(stompClient.current !== null) {

            stompClient.current.deactivate();

        }

    }, []);

    const onError: frameCallbackType = useCallback( (frame: IFrame) => {

        console.error("O Message Broker está reportando o seguinte erro: " + frame.headers['message']);

        console.error("Detalhes adicionais: " + frame.body);

    }, []);

    const onMessageReceived: messageCallbackType = (message: IMessage) => {
        
        if(message.body) {

            const newMessage: TicketMessageResponseDTO = JSON.parse(message.body);

            setMessages(currentMessages => [

                    ...currentMessages,
                    newMessage
    
            ]);

        } 

    }

    const sendTicketMessage = (message: string) => {

        const payload: TicketMessageRequestDTO = {
            message: message,
            ticketId: ticketId,
            senderId: senderId
        }

        sendMessage(payload, `/app/message/${ticketId}`);

    }

    const sendMessage = (payload: TicketMessageRequestDTO, endpoint: string) => {
        
        if(stompClient.current !== null && ticketId !== undefined) {

            stompClient.current.publish({
                destination: endpoint,
                body: JSON.stringify(payload)
            });

        } else {

            alert("Não foi possível enviar a mensagem.");

        }

    }

    const setUpConnection = useCallback(() => {

        stompClient.current = new Client({ brokerURL: 'ws://localhost:8080/ws' });

        stompClient.current.onConnect = onConnect;

        stompClient.current.onStompError = onError;

        stompClient.current.activate();

    }, [onConnect, onError]);

    useEffect(() => {

        const getTicketMessages = async () => {
        
            await Api.get(`/api/ticket-message?ticketId=${ticketId}`)
    
                .then((res: any) => {
    
                    let results = res.data;
                    
                    if(results) {
    
                        setMessages(results);
    
                    }
    
                })
    
                .catch((error: any) => {
    
                    console.error(error);
    
                })
            
        }
        
        if(ticketId !== undefined && messages.length === 0 && !messagesWereFetched) {

            setMessagesWereFetched(true);
            
            (async () => {

                await getTicketMessages();
                
            })()

        }
        
    }, [messages, setMessages, messagesWereFetched, ticketId])

    useEffect(() => {

        const notConnected = !(stompClient.current?.connected ?? false);

        if(ticketId !== undefined && notConnected) {

            setUpConnection();

            return () =>  onDisconnect();

        }

    }, [ticketId, setUpConnection, onDisconnect])

    useEffect(() => {

        const isConnected = setInterval(() => {
            
            // Atualizar o status da conexão.
            setChatConnected(stompClient.current?.connected ?? false);

        }, 1000);

        return () => clearInterval(isConnected);

    }, []);

    return [ messages, sendTicketMessage, chatConnected ];

}

export default useChat;