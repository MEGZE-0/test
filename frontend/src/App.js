// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Line } from "react-chartjs-2";
// import "chart.js/auto";
// import "./App.css";
// import { plugins, scales } from "chart.js/auto";
// function App() {
//   const [data, setData] = useState({ customers: [], transactions: [] });
//   const [filter, setFilter] = useState({
//     customerName: "",
//     transactionAmount: "",
//   });
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const [chartData, setChartData] = useState({});
//   const [chartOptions, setChartOptions] = useState({});

//   useEffect(() => {
//     axios
//       .get("http://localhost:5001/api/data")
//       .then((response) => setData(response.data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []);

//   useEffect(() => {
//     if (selectedCustomer) {
//       const customerTransactions = data.transactions.filter(
//         (transaction) => transaction.customer_id === selectedCustomer.id
//       );
//       const groupedByDate = customerTransactions.reduce((acc, transaction) => {
//         acc[transaction.date] =
//           (acc[transaction.date] || 0) + transaction.amount;
//         return acc;
//       }, {});

//       setChartData({
//           labels: Object.keys(groupedByDate),
//           datasets: [{
//               label: 'Total Transaction Amount',
//               data: Object.values(groupedByDate),
//               backgroundColor: 'rgba(75, 192, 192, 0.6)',
//               borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1
//           }]
//       });

//       setChartData({
//           labels: Object.keys(groupedByDate),
//           datasets: [{
//               label: 'Total Transaction Amount',
//               data: Object.values(groupedByDate),
//               backgroundColor: 'rgba(75,192,192, 0.6)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 1,
//               pointBackgroundColor: 'rgba(75,192,192,1)',
//               pointBordeerColor: '#fff',
//               PointHoverBackgroundColor: '#fff',
//               pointHoverBordeerColor: 'rgba(75,192,192,1)',
//           }]
//       });

//       setChartData({
//           labels: Object.keys(groupedByDate),
//           datasets: [{
//               label: 'Total Transaction Amount',
//               data: Object.values(groupedByDate),
//               backgroundColor: 'rgba(75,192,192, 0.6)',
//               borderColor: 'rgba(75,192,192,1)',
//               borderWidth: 1,
//               pointBackgroundColor: 'rgba(75,192,192,1)',
//               pointBordeerColor: '#fff',
//               PointHoverBackgroundColor: '#fff',
//               pointHoverBordeerColor: 'rgba(75,192,192,1)',
//           }]
//       });

//       setChartOptions({
//           scales: {
//               y: {
//                   type: 'linear',
//                   min: 0,
//                   max: Math.max(...Object.values(groupedByDate)) + 5
//               }
//           }
//       });

//       setChartData({
//         datasets: [
//           {
//             label: "Total Transaction Amount",
//             data: dates.map((date, index) => ({ x: date, y: amounts[index] })),
//             backgroundColor: "rgba(75,192,192, 0.6)",
//             borderColor: "rgba(75,192,192,1)",
//             borderWidth: 1,
//             pointBackgroundColor: "rgba(75,192,192,1)",
//             pointBordeerColor: "#fff",
//             PointHoverBackgroundColor: "#fff",
//             pointHoverBordeerColor: "rgba(75,192,192,1)",
//           }]
//       });

//       setChartOptions({
//         plugins: {
//             tooltip:{
//                 callbacks: {
//                     label:function(context){
//                         return `Date: ${context.raw.x}\nAmount: ${context.raw.y}`;
//                     }
//                 }
//             }
//         },
//         animation: {
//             duration: 2000,
//             easing: 'easeInOutQuart'
//         },
//         scales:{
//             x: {
//                 type: 'time',
//                 time: {
//                     unit: 'day'
//                 }
//             },
//             y: {
//                 type: 'linear',
//                 min: 0,
//                 max: Math.max(...amounts) + 10 
//             }
//         }
//       })
//     }
//   }, [selectedCustomer, data.transactions]);

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter({ ...filter, [name]: value });
//   };

//   const filteredCustomers = data.customers.filter((customer) =>
//     customer.name.toLowerCase().includes(filter.customerName.toLowerCase())
//   );

//   const filteredTransactions = data.transactions.filter(
//     (transaction) =>
//       filter.transactionAmount === "" ||
//       transaction.amount === Number(filter.transactionAmount)
//   );

//   const handleCustomerClick = (customer) => {
//     setSelectedCustomer(customer);
//   };

//   return (
//     <div>
//       <h1>Customer Transactions</h1>
//       <div className="customerinput">
//         <input
//           type="text"
//           name="customerName"
//           placeholder="Filter by customer name"
//           value={filter.customerName}
//           onChange={handleFilterChange}
//         />
//         <input
//           type="number"
//           name="transactionAmount"
//           placeholder="Filter by transaction amount"
//           value={filter.transactionAmount}
//           onChange={handleFilterChange}
//         />
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Customer Name</th>
//             <th>Transaction Date</th>
//             <th>Transaction Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredCustomers.map((customer) =>
//             filteredTransactions
//               .filter((transaction) => transaction.customer_id === customer.id)
//               .map((transaction) => (
//                 <tr
//                   key={transaction.id}
//                   onClick={() => handleCustomerClick(customer)}
//                 >
//                   <td>{customer.name}</td>
//                   <td>{transaction.date}</td>
//                   <td>{transaction.amount}</td>
//                 </tr>
//               ))
//           )}
//         </tbody>
//       </table>
//       {selectedCustomer && chartData.labels && chartData.datasets ? (
//         <div className="chart-container">
//           <h2>Transactions for {selectedCustomer.name}</h2>
//           <Line data={chartData} options={chartOptions} />
//         </div>
//       ) : (
//         selectedCustomer && (
//           <div className="no-data">
//             No data available for the selected customer.
//           </div>
//         )
//       )}
//     </div>
//   );
// }






















// export default App;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Line } from 'react-chartjs-2';
// import 'chart.js/auto';
// import './App.css';

// function App() {
//     const [data, setData] = useState({ customers: [], transactions: [] });
//     const [filter, setFilter] = useState({ customerName: '', transactionAmount: '' });
//     const [selectedCustomer, setSelectedCustomer] = useState(null);
//     const [chartData, setChartData] = useState({});
//     const [chartOptions, setChartOptions] = useState({});

//     useEffect(() => {
//         axios.get('http://localhost:5001/api/data')
//             .then(response => setData(response.data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     useEffect(() => {
//         if (selectedCustomer) {
//             const customerTransactions = data.transactions.filter(transaction => transaction.customer_id === selectedCustomer.id);
//             const groupedByDate = customerTransactions.reduce((acc, transaction) => {
//                 acc[transaction.date] = (acc[transaction.date] || 0) + transaction.amount;
//                 return acc;
//             }, {});

//             const dates = Object.keys(groupedByDate);
//             const amounts = Object.values(groupedByDate);

//             setChartData({
//                 labels: dates,
//                 datasets: [{
//                     label: 'Total Transaction Amount',
//                     data: amounts,
//                     backgroundColor: 'rgba(75, 192, 192, 0.6)',
//                     borderColor: 'rgba(75, 192, 192, 1)',
//                     borderWidth: 1,
//                     pointBackgroundColor: 'rgba(75, 192, 192, 1)',
//                     pointBorderColor: '#fff',
//                     pointHoverBackgroundColor: '#fff',
//                     pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
//                 }]
//             });

//             setChartOptions({
//                 scales: {
//                     y: {
//                         type: 'linear',
//                         min: 0,
//                         max: Math.max(...amounts) + 10 // Adjust the max value as needed
//                     }
//                 }
//             });
//         }
//     }, [selectedCustomer, data.transactions]);

//     const handleFilterChange = (e) => {
//         const { name, value } = e.target;
//         setFilter({ ...filter, [name]: value });
//     };

//     const filteredCustomers = data.customers.filter(customer => 
//         customer.name.toLowerCase().includes(filter.customerName.toLowerCase()));

//     const filteredTransactions = data.transactions.filter(transaction => 
//         (filter.transactionAmount === '' || transaction.amount === Number(filter.transactionAmount)));

//     const handleCustomerClick = (customer) => {
//         setSelectedCustomer(customer);
//     };

//     return (
//         <div>
//             <h1>Customer Transactions</h1>
//             <div className='customerinput'>
//                 <input
//                     type="text"
//                     name="customerName"
//                     placeholder="Filter by customer name"
//                     value={filter.customerName}
//                     onChange={handleFilterChange}
//                 />
//                 <input
//                     type="number"
//                     name="transactionAmount"
//                     placeholder="Filter by transaction amount"
//                     value={filter.transactionAmount}
//                     onChange={handleFilterChange}
//                 />
//             </div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Customer Name</th>
//                         <th>Transaction Date</th>
//                         <th>Transaction Amount</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredCustomers.map(customer => (
//                         filteredTransactions
//                             .filter(transaction => transaction.customer_id === customer.id)
//                             .map(transaction => (
//                                 <tr key={transaction.id} onClick={() => handleCustomerClick(customer)}>
//                                     <td>{customer.name}</td>
//                                     <td>{transaction.date}</td>
//                                     <td>{transaction.amount}</td>
//                                 </tr>
//                             ))
//                     ))}
//                 </tbody>
//             </table>
//             {selectedCustomer && chartData.labels && chartData.datasets ? (
//                 <div className="chart-container">
//                     <h2>Transactions for {selectedCustomer.name}</h2>
//                     <Line data={chartData} options={chartOptions} />
//                 </div>
//             ) : (
//                 selectedCustomer && <div className="no-data">No data available for the selected customer.</div>
//             )}
//         </div>
//     );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import './App.css';

function App() {
    const [data, setData] = useState({ customers: [], transactions: [] });
    const [filter, setFilter] = useState({ customerName: '', transactionAmount: '' });
    const [customerSelection, setCustomerSelection] = useState(null);
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        axios.get('http://localhost:5001/api/data')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    useEffect(() => {
        if (customerSelection) {
            const customerTransactions = data.transactions.filter(transaction => transaction.customer_id === customerSelection.id);
            const groupedByDate = customerTransactions.reduce((acc, transaction) => {
                acc[transaction.date] = (acc[transaction.date] || 0) + transaction.amount;
                return acc;
            }, {});

            setChartData({
                labels: Object.keys(groupedByDate),
                datasets: [{
                    label: 'Total Transaction Amount',
                    data: Object.values(groupedByDate),
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    pointBackgroundColor: 'rgba(75, 192, 192, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
                }]
            });

            setChartOptions({
                scales: {
                    y: {
                        type: 'linear',
                        min: 0,
                        max: Math.max(...Object.values(groupedByDate)) + 30
                    }
                }
            });
        }
    }, [customerSelection, data.transactions]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter({ ...filter, [name]: value });
    };

    const customerFilteration = data.customers.filter(customer =>
        customer.name.toLowerCase().includes(filter.customerName.toLowerCase())
    );

    const transactionFilteration = data.transactions.filter(transaction =>
        (filter.transactionAmount === '' || transaction.amount === Number(filter.transactionAmount))
    );

    const handleCustomerClick = (customer) => {
        setCustomerSelection(customer);
    };

    return (
        <div>
            <h1>Customer Transactions</h1>
            <div className="customer">
                <input
                    type="text"
                    name="customerName"
                    placeholder="Filter by customer name"
                    value={filter.customerName}
                    onChange={handleFilterChange}
                />
                <input
                    type="number"
                    name="transactionAmount"
                    placeholder="Filter by transaction amount"
                    value={filter.transactionAmount}
                    onChange={handleFilterChange}
                />
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Transaction Date</th>
                        <th>Transaction Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {customerFilteration.map(customer => (
                        transactionFilteration
                            .filter(transaction => transaction.customer_id === customer.id)
                            .map(transaction => (
                                <tr key={transaction.id} onClick={() => handleCustomerClick(customer)}>
                                    <td>{customer.name}</td>
                                    <td>{transaction.date}</td>
                                    <td>{transaction.amount}</td>
                                </tr>
                            ))
                    ))}
                </tbody>
            </table>

            {customerSelection && chartData.labels && chartData.datasets ? (
                <div className="chart-container">
                    <h2>Transactions for {customerSelection.name}</h2>
                    <Line data={chartData} options={chartOptions} />
                </div>
            ) : (
                customerSelection && <div className="no-data">No data available for the selected customer.</div>
            )}
        </div>
    );
}

export default App;
