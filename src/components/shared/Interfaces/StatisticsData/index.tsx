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

interface Chart{
    html: string;
    scripts: string[];
}

export default interface StatisticsData{
    total_urgent_tickets: number;
    total_solved_tickets: number;
    late_tickets_data: LTD;
    on_time_tickets_data: OTTD;
    ticket_resolution_average_speed: TRAS;
    chart: Chart;
}