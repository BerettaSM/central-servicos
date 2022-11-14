import React, {  useEffect, useRef, useState } from 'react';

import { Container } from './styles';

import MessageTemplate from '../MessageTemplate';

const MessagesContainer: React.FC = () => {

    const bottomRef = useRef<null | HTMLDivElement>(null);

    const [messages, setMessages] = useState<boolean[]>([]); // Mudar o tipo

    const scrollToBottom = () => {

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    }

    useEffect(() => { // Apenas testes, deletar

        setInterval(() => {

            const outgoingMessage = Math.random() < .5;

            setMessages(current => [

                ...current,
                outgoingMessage

            ])

        }, 2000);

    }, []);

    useEffect(() => {

        scrollToBottom();

    }, [messages]);

    return (

        <Container>

            {messages.map((myBoolean, idx) => <MessageTemplate key={idx} outgoingMessage={myBoolean}/>)}

            <div ref={bottomRef} />

        </Container>

    );

}

export default MessagesContainer;