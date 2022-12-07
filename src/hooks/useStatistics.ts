import { useState, useEffect } from 'react';
import { Api } from '../Api';

interface LTD {
    late_tickets: number;
    percentage_late: number;
}

interface OTTD {
    solved_tickets_on_time: number;
    percentage_solved_on_time: number;
}

interface TRAS {
    days: number;
    hours: number;
    minutes: number;
}

interface ChartHtml{
    html: string;
    scripts: string[];
}

interface StatisticsData{
    total_urgent_tickets: number;
    total_solved_tickets: number;
    late_tickets_data: LTD;
    on_time_tickets_data: OTTD;
    ticket_resolution_average_speed: TRAS;
    chart_html: ChartHtml;
}

const useStatistics = (): [StatisticsData | undefined, boolean, boolean, () => void] => {

    const [data, setData] = useState<StatisticsData>();

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    const retry = () => {

        setLoading(true);

    }

    useEffect(() => {

        const fetchData = async () => {

            setError(false);

            await Api.get(`http://localhost:5000/basic-analysis/${30}`)

                .then((res: any) => {

                    if(res.status === 200) {

                        setData(res.data);

                        setLoading(false);

                    }

                })

                .catch(err => {

                    console.log(err);
                    
                    setError(true);

                    setLoading(false);

                });

        }

        if(loading)
            
            fetchData();

    }, [loading])

    return [data, loading, error, retry];

}

export default useStatistics;