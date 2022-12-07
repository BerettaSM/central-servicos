import React, { useEffect } from 'react';
import useStatistics from '../../hooks/useStatistics';
import Spinner from '../../components/shared/Spinner';
import StatisticLabel from '../../components/shared/StatisticLabel';
import LargeButton from '../../components/shared/LargeButton';

import {
    Grid,
    Container,
    DataArea,
    ChartArea
} from './styles';



const StatisticsView: React.FC = () => {

    const [data, loading, error, retry] = useStatistics();

    useEffect(() => {

        if(data?.chart_html.scripts)
            // eslint-disable-next-line
            data?.chart_html.scripts.forEach(script => eval(script));

    },[data])

    return (

        <Container>

            {
                loading ? (

                    <Spinner
                        clockwise={true}
                        doubleSemiCircles={false}
                        smoothness={'ease'}
                        width={150}
                    />

                ) : error ? (

                    <div style={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                        }}
                    >

                        <h3 style={{marginBottom: '20px'}}>Não foi possível alcançar o servidor de estatísticas.</h3>
                        
                        
                        <LargeButton
                            innerText='Tentar novamente'
                            onClick={() => retry()}
                        />
                    

                    </div>

                ) : (

                    <Grid>
                    
                        <ChartArea dangerouslySetInnerHTML={{ __html: data?.chart_html.html?? "" }}>

                        </ChartArea>

                        <DataArea>

                            <StatisticLabel
                                label='Total de tickets urgentes no momento'
                                data={`${data?.total_urgent_tickets}`}
                                dataColor='var(--PRIORITY_URGENT)'
                            />

                            <StatisticLabel
                                label='Total de tickets resolvidos'
                                data={`${data?.total_solved_tickets}`}
                                dataColor='var(--PRIORITY_LOW)'
                            />

                            <StatisticLabel
                                label='Tickets abertos em atraso'
                                data={`${data?.late_tickets_data.late_tickets}
                                    (${data?.late_tickets_data.percentage_late.toFixed(2)}%)`}
                                dataColor='var(--PRIORITY_HIGH)'
                            />

                            <StatisticLabel
                                label='Tickets resolvidos dentro do prazo'
                                data={`${data?.on_time_tickets_data.solved_tickets_on_time}
                                    (${data?.on_time_tickets_data.percentage_solved_on_time.toFixed(2)}%)`}
                                dataColor='var(--PRIORITY_LOW)'
                            />

                            <StatisticLabel
                                label='Tempo médio para resolução de um ticket'
                                data={`${data?.ticket_resolution_average_speed.days} dia(s), 
                                    ${data?.ticket_resolution_average_speed.hours} horas e ${data?.ticket_resolution_average_speed.minutes} minutos`}
                            />

                        </DataArea>
 
                    </Grid>

                )
            }

        </Container>

        

    );
    
}

export default StatisticsView;