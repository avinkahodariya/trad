import React from 'react'
import Button from 'devextreme-react/button';
import DataGrid, {
  Column, Editing, Paging, Lookup, 
} from 'devextreme-react/data-grid';


class Table extends React.Component {

         
    constructor(props) {
      super(props);
      this.state = { events: [] ,rows:[]};
      this.logEvent = this.logEvent.bind(this);
      this.onEditingStart = this.logEvent.bind(this, 'EditingStart');
      this.onInitNewRow = this.logEvent.bind(this, 'InitNewRow');
      this.onRowInserting = this.logEvent.bind(this, 'RowInserting');
      this.onRowInserted = this.logEvent.bind(this, 'RowInserted');
      this.onRowUpdating = this.logEvent.bind(this, 'RowUpdating');
      this.onRowUpdated = this.logEvent.bind(this, 'RowUpdated');
      this.onRowRemoving = this.logEvent.bind(this, 'RowRemoving');
      this.onRowRemoved = this.logEvent.bind(this, 'RowRemoved');
      this.onSaving = this.logEvent.bind(this, 'Saving');
      this.onSaved = this.logEvent.bind(this, 'Saved');
      this.onEditCanceling = this.logEvent.bind(this, 'EditCanceling');
      this.onEditCanceled = this.logEvent.bind(this, 'EditCanceled');
      this.clearEvents = this.clearEvents.bind(this);
    }
  

        createData(ID,ContactPerson, Email, Telephone, Mobile, Designation, Action) {
                return {ID, ContactPerson, Email, Telephone, Mobile, Designation, Action };
              }
        
           
           componentDidMount() {
            const rowsData = [
                this.createData(1,"Rajesh","accounts@narimanfinvest.com","+2352 1553 264 ","$022 - 66338811","Partner"),
                this.createData(2,"Anuj Agarwal.","anuj@narimanfinvest.com","+2352 1553 264 ","$022 - 66338811","Manager"),
                this.createData(3,"Rajesh","backoffice@narimanfinvest.com","- ","-","CEO"),
           ];
           this.setState({rows:rowsData})
           }

    logEvent(eventName) {
      this.setState((state) => ({ events: [eventName].concat(state.events) }));
    }

     onRowPre = (e) => {
      if (e.rowType == "header") {
        e.rowElement.style.display = "none";
      }
      if (e.rowType == "data") {
        e.rowElement.style.margin = "15px";
       
        e.rowElement.style.fontStyle = "medium";
    
        e.rowElement.style.color = "#3D3D3D";
        e.rowElement.style.lineHeight = "35px";
        e.rowElement.style.fontWeight = 400;
      }
  
      if (e.rowIndex % 2 === 0) {
        e.rowElement.style.backgroundColor = "#E1F1FF";
      }
    };
  
    clearEvents() {
      this.setState({ events: [] });
    }
    render() {
        return (
          <React.Fragment>
            <div className='flex justify-between ring-0	bg-[#3491FF] rounded-tl-2xl rounded-tr-2xl text-white'>
                    <div class="px-6 py-3 text-lg font-medium text-center">Contact Person</div>
                    <div class="px-6 py-3 text-lg font-medium text-center">Email</div>
                    <div class="px-6 py-3 text-lg font-medium text-center">Telephone</div>
                    <div class="px-6 py-3 text-lg font-medium text-center">Mobile</div>
                    <div class="px-6 py-3 text-lg font-medium text-center">Description</div>
                    <div class="px-6 py-3 text-lg font-medium text-center">Action</div>
            </div>
            <DataGrid
                className=' py-4 rounded-b-2xl back-forword-btn font-medium text-lg'
              id="gridContainer"
              dataSource={this.state.rows}
              keyExpr="ID"
              onRowValidating={this.onRowValidating}
              onEditorPreparing={this.onEditorPreparing}
              onRowPrepared={this.onRowPre}
              >

                
              
              <Editing className="border-2 border-indigo-600"
                mode="row"
                allowUpdating={true}
                allowDeleting={true}
                useIcons={true}

                />
              <Column dataField="ContactPerson" caption="Contact Person" />
              <Column dataField="Email" />
              <Column dataField="Telephne" />
              <Column dataField="Mobile" />
              <Column dataField="Designation" />
            </DataGrid>

         
          </React.Fragment>
        );
      }
}
  
export default Table