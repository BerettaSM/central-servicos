import { useState, useEffect } from 'react';


const useElapsedTime = (sendDate: string, updateIntervalInSeconds: number) => {

    const [ elapsedTime, setElapsedTime ] = useState("Desconhecido.");

    useEffect(() => {

        const getElapsedTime = () => {

            const millis = Date.now() - Date.parse(sendDate);
    
            const units: [number, string, string][] = [
                [31536000, 'anos', 'ano'],
                [2628288, 'meses', 'mês'],
                [86400, 'dias', 'dia'],
                [3600, 'horas', 'hora'],
                [60, 'minutos', 'minuto'],
            ];
    
            for(const unit of units) {
    
                const diff = Math.floor((millis / 1000) / unit[0]);

                if(diff > 0) {
    
                    return `${diff} ${diff > 1 ? unit[1] : unit[2]} atrás.`;
    
                }
    
            }
    
            return 'Agora';
    
        }

        const updateElapsedTime = setInterval(() => {

            setElapsedTime(getElapsedTime());

        }, updateIntervalInSeconds * 1000);

        // Chamar uma vez para a string não fica como "desconhecido" durante o primeiro minuto.
        setElapsedTime(getElapsedTime());

        return () => clearInterval(updateElapsedTime);

    }, [sendDate, updateIntervalInSeconds])

    return [ elapsedTime ];

}

export default useElapsedTime;