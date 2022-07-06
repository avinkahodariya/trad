export const initalState = [
    {id: 1, active: true, image: '/assets/img/svg-1.png', title: 'Trade Plus', use: 'For BSE & NSE Stock Brokers', 
    description: "Back office software for stock brokers. It also Facilitates in-depth reports and Back office software for stock brokers. It also Facilitates in-depth reports and trade screens while ensuring security for each individual user." },
    {id: 2, active: true, image: '/assets/img/svg-3.png', title: 'Estro', use: 'For NDSL DPs', description: "This Electronic  Security Treasury Records Organiser provides back office / front office This Electronic  Security Treasury Records Organiser provides back office / front office  coordination, billing and accounting software for DPs with NSDL."},
    {id: 3, active: true, image: '/assets/img/svg-2.png', title: 'Cross', use: 'For CDSL DPs', description: "CDSL Record Organiser & Support System software for managing all activities in DP’s office. CDSL Record Organiser & Support System software for managing all activities in DP’s office. It offers a lot more facilities and security than CDAS system like stationery management, signature verification, current holding, dues etc."},
    {id: 4, active: true, image: '/assets/img/svg-4.png', title: 'Commex', use: 'For MCX & NCDEX commodities', description: "Back office software for Commodities Derivatives Exchanges.It Generates trade files from Back office software for Commodities Derivatives Exchanges. It Generates trade files from  back office for clients/sub-brokers. Provides a fully equipped accounting module that can handle all your accounting needs."},
    {id: 6, active: false, image: '/assets/img/svg-1.png', title: 'e-Sign', use: 'For MCX & NCDEX commodities', description: "Module for seamlessly Digitally signing the documents and dispatch from back office software Module for seamlessly Digitally signing the documents and dispatch from back office software  to the email address of the client with maintenance of log."},
   ];

 
   
   export const downloadState = [
    {id: 1, active: true, image: '/assets/img/svg-1.png',link:"/downloads/TradePlus&TradeNet", linkname:"TradePlus&TradeNet",title: 'Trade Plus & TradeNet', use: 'For BSE & NSE Stock Brokers'},
    {id: 2, active: true, image: '/assets/img/svg-3.png',link:"/downloads/ESTRO&EstroNet", linkname:"ESTRO&EstroNet",title: 'ESTRO & EstroNet', use: 'Back office / front office co-ordination, billing and accounting software for DPs with NSDL'},
    {id: 3, active: true, image: '/assets/img/svg-2.png',link:"/downloads/CROSS&CrossNet", linkname:"CROSS&CrossNet", title: 'CROSS & CrossNet', use: 'Back office / front office co-ordination, billing and accounting software for DPs with CDSL'},
    {id: 5, active: true, image: '/assets/img/svg-4.png',link:"/downloads/CommEx&CommNet", linkname:"CommEx&CommNet", title: 'CommEx & CommNet', use: 'Back office Software for Commodity Exchange'},
    {id: 6, active: false, image: '/assets/img/svg-2.png',link:"/downloads/eSign",  linkname:"eSign",title: 'eSign EXE is available along with relevant Products', use: 'For MCX & NCDEX commodities'},
    {id: 6, active: false, image: '/assets/img/svg-4.png',link:"/downloads/PMS",  linkname:"PMS",title: 'PMS', use: 'Portfolio Management Services'},

]



   export const initaldata = [
    {id: 1, active: true, image: '/assets/img/Facility-1.svg', title: 'Delivery charge', use: 'For BSE & NSE Stock Brokers',},
    {id: 2, active: true, image: '/assets/img/Facility-2.svg', title: 'Service Tax', use: 'For CDSL DPs',},
    {id: 3, active: true, image: '/assets/img/Facility-3.svg', title: 'STT', use: 'For NDSL DPs',},
    {id: 4, active: true, image: '/assets/img/Facility-4.svg', title: 'Turnover Charges', use: 'For MCX & NCDEX commodities',},
    {id: 5, active: false, image: '/assets/img/Facility-5.svg', title: 'Stamp Duty', use: 'Back Office Data Access Utility',},
    {id: 6, active: false, image: '/assets/img/Facility-1.svg', title: 'Delivery charge', use: 'For MCX & NCDEX commodities',},
   ];


   export const initaltext = [
    {id: 1, active: true, sno:'01',  title: 'Maintenance of multiple Demat A/c with different DPs and account types.', use: 'For BSE & NSE Stock Brokers',},
    {id: 2, active: true, sno:'02',  title: 'Automatic Demat Data entry based on Delivery positions of clients.', use: 'For CDSL DPs',},
    {id: 3, active: true, sno:'03',  title: 'Scrip, Client wise demat reports to give a clear picture of deliveries lying with us as against outstanding receivable / deliverable to clients.', use: 'For NDSL DPs',},
    {id: 4, active: true, sno:'04',  title: 'Printing of Demat Transfer Memo to be submitted to DP. This includes Pay-in, Pay-out, Inter Settlement based on account from which to transfer i.e. beneficiary / pool.', use: 'For MCX & NCDEX commodities',},
    {id: 5, active: false, sno:'05',  title: 'Various reports like Demat Audit, Holding statement, Demat standing available.', use: 'Back Office Data Access Utility',},
    {id: 6, active: false, sno:'06',  title: 'Possible inter-settlement report is available. Automatic generation of inter-settlement transfer entries and printing of instructions.', use: 'For MCX & NCDEX commodities',},
    {id: 7, active: false, sno:'07',  title: 'Transfer into own beneficiary account based on payment receivable status of client is possible. Scanning for client’s holding in our beneficiary balance for making delivery against his sale and generation transfer instruction from our beneficiary into our pool for the purpose of pay-in is also possible.', use: 'For MCX & NCDEX commodities',},
    {id: 8, active: false, sno:'08',  title: 'Demat confirmation letter & report available.', use: 'For MCX & NCDEX commodities',},
    {id: 9, active: false, sno:'09',  title: 'Demat Reconciliation using SPEEDe file, DPC9, DP50, Exchange pay out file, file received from DP etc. may be used for reconciliation.', use: 'For MCX & NCDEX commodities',},
    {id: 10, active: false, sno:'10',  title: 'Corporate action adjustment for Bonus, Split etc. can also generate Journal vouchers for dividend credit for clients’ shares lying with us.', use: 'For MCX & NCDEX commodities',},
    {id: 11, active: false, sno:'11',  title: 'Viewing of holding reports to list quantity of shares of clients lying with us.', use: 'For MCX & NCDEX commodities',},

   ];

   export const initalpagegraph = [
    {id: 1, active: true,   title: 'Reports based on clients, Security for providing to clients or for internal controls and usage.', use: 'For BSE & NSE Stock Brokers',},
    {id: 2, active: true,   title: 'Multiple settlement reports with various options.', use: 'For CDSL DPs',},
    {id: 3, active: true,   title: 'Reports like Brokerages, Service Tax payable, Client Performance, security wise concentration on periodic basis like daily, monthly, quarterly etc.', use: 'For NDSL DPs',},
    {id: 4, active: true,  title: 'Trades daybook (Trades Register) in order of time, security, client for particular day or period across the settlement(s) along option to select / deselect columns.', use: 'For MCX & NCDEX commodities',},
    {id: 5, active: false, title: 'Various reports like Demat Audit, Holding statement, Demat standing available.', use: 'Back Office Data Access Utility',},
    {id: 6, active: false, title: 'Possible inter-settlement report is available. Automatic generation of inter-settlement transfer entries and printing of instructions.', use: 'For MCX & NCDEX commodities',},
    {id: 7, active: false, title: 'Transfer into own beneficiary account based on payment receivable status of client is possible. Scanning for client’s holding in our beneficiary balance for making delivery against his sale and generation transfer instruction from our beneficiary into our pool for the purpose of pay-in is also possible.', use: 'For MCX & NCDEX commodities',},
    {id: 8, active: false, title: 'Demat confirmation letter & report available.', use: 'For MCX & NCDEX commodities',},
    {id: 9, active: false, title: 'Demat Reconciliation using SPEEDe file, DPC9, DP50, Exchange pay out file, file received from DP etc. may be used for reconciliation.', use: 'For MCX & NCDEX commodities',},
    {id: 10, active: false, title: 'Corporate action adjustment for Bonus, Split etc. can also generate Journal vouchers for dividend credit for clients’ shares lying with us.', use: 'For MCX & NCDEX commodities',},
    {id: 11, active: false, title: 'Viewing of holding reports to list quantity of shares of clients lying with us.', use: 'For MCX & NCDEX commodities',},

   ];