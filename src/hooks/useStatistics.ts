import { useState, useEffect } from 'react';
import { Api } from '../Api';
import StatisticsData from '../components/shared/Interfaces/StatisticsData';

const useStatistics = (daysAgo: number, graphType: string): [StatisticsData | undefined, boolean, boolean, () => void] => {

    const [data, setData] = useState<StatisticsData>();

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(false);

    const reload = (delayMs: number = 500) => {

        setTimeout(() => {

            setLoading(true);

        }, delayMs)

    }

    useEffect(() => {

        const fetchData = async () => {

            setError(false);

            await Api.get(`http://localhost:5000/basic-analysis/${daysAgo}/${graphType}`)

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

    }, [loading, daysAgo, graphType])

    return [data, loading, error, reload];

}

export default useStatistics;