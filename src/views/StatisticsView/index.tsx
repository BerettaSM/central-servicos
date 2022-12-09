import React, { useEffect, useState } from 'react';
import useStatistics from '../../hooks/useStatistics';
import Spinner from '../../components/shared/Spinner';
import StatisticLabel from '../../components/shared/StatisticLabel';
import LargeButton from '../../components/shared/LargeButton';
import Radiobutton from '../../components/shared/Radiobutton';
import NumberInput from '../../components/shared/NumberInput';

import {
    Grid,
    Container,
    OptionsArea,
    DataArea,
    ChartArea,
    RadiobuttonGrouper,
    Grouper
} from './styles';

const StatisticsView: React.FC = () => {

    const [days, setDays] = useState(30);

    const [graph, setGraph] = useState('line');

    const [data, loading, error, reload] = useStatistics(days, graph);

    useEffect(() => {

        if(data?.chart?.scripts)
            // eslint-disable-next-line
            data?.chart.scripts.forEach(script => eval(script));

    },[data])

    const handleGraphChange = (graphType: string) => {

        setGraph(graphType);

        reload();

    }

    const chartHtml = data?.chart?.html ?? "";

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

                    <Grouper>

                        <span>Não foi possível alcançar o servidor de estatísticas.</span>
                        
                        <LargeButton
                            innerText='Tentar novamente'
                            onClick={() => {
                                setDays(30);
                                reload();
                            }}
                        />
                    
                    </Grouper>

                ) : (

                    <Grid>
                        
                        <OptionsArea>

                                <RadiobuttonGrouper>

                                    <Radiobutton
                                        value='line'
                                        label='Gráfico de Linhas'
                                        handleChange={handleGraphChange}
                                        isChecked={graph === 'line'}
                                    />

                                    <Radiobutton
                                        value='scatter'
                                        label='Gráfico de Espalhamento'
                                        handleChange={handleGraphChange}
                                        isChecked={graph === 'scatter'}
                                    />

                                </RadiobuttonGrouper>

                                <NumberInput 
                                    value={days}
                                    setValue={(n: number) => {
                                        setDays(n);
                                        reload();
                                    }}
                                    min={1}
                                    max={150}
                                    beforeLabel='Últimos '
                                    afterLabel=' dias'
                                />

                        </OptionsArea>


                        {

                            chartHtml !== "" ? (

                                <ChartArea dangerouslySetInnerHTML={{ __html: chartHtml }} />

                            ) : (

                                <span>Sem dados o suficiente para gerar um gráfico.</span>

                            )

                        }
                        
                        <DataArea>

                            <StatisticLabel
                                label='Total de tickets urgentes no momento(Prioridade alta/altíssima)'
                                data={`${data?.total_urgent_tickets}`}
                                dataColor='var(--PRIORITY_URGENT)'
                            />

                            <StatisticLabel
                                label={`Total de tickets resolvidos`}
                                data={`${data?.total_solved_tickets}`}
                                dataColor='var(--PRIORITY_LOW)'
                            />

                            <StatisticLabel
                                label='Tickets em atraso'
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