import './index.scss';
import { Bar, Pie } from 'react-chartjs-2';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    ArcElement,
    BarElement,
    Title,
    Tooltip,
    Legend );

export default function Grafico1() {
    
    const options = {

        Plugin: {
            Legend: {
                position: 'top ',
            },
            Title: {
                display: true,
                Text: 'Fluxo de pessoas'
            },
        },
    };

    const labels = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '13:00', '13:30', '14:00',]
    const fluxo2 = [40, 80, 100, 60, 80, 140, 160, 100, 60, 40]

    const data =  {
        labels,
        datasets: [
            {
            label :'Fluxo de Pessoas',
            backgroundColor: 'red',
            data: fluxo2
        },
    ]
        
    }

    const data2 = {
        labels: ['10 a 12', '13 a 15', '15 a 18', '18 a 24', '24 a 30', '31 a 40'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'red',
              'blue',
              'yellow',
              'green',
              'black',
              'rgba(255, 159, 64, 0.2)',
            ],
          },
        ],
      };

    return(
        <main>
            <h1> Fluxo de Pessoas </h1>
            <h3> Quantidade de pessoas por 30 minutos</h3>
            
            <div className='grafico'> 

                <Bar  options={options} data={data} />

            </div>

            <h1> Faixa Etaria  </h1>
            <h3> Idade de pessoas inscritas no Site</h3>

            <div className='grafico1'> 

                <Pie data={data2} />
                
            </div>


            
        </main>
    )
}