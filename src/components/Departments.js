import React from 'react'
import './Department.css'

class Departments extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            departments : props.departments
        }    
    }

    getDepartmentsMenuItems(){
        const departments = this.state.departments;
        return (
            <React.Fragment>
                <ul className="list-group">
                    {
                        departments.map((department)=>(
                            <li>{department.title.en}</li>
                        ))
                    }
                </ul>
            </React.Fragment>
        );
    }

    render(){
        return (
            <div>
                <h1>Departments</h1>
                <nav>
                    {this.getDepartmentsMenuItems()}
                </nav>
            </div>
        )
    }
}


export default Departments;