import React, {Component} from "react";

import './todo.css';

let initialList = [];
class ToDoComponent extends Component {
    state = {list: null, searchVal: ''};


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(data => data.json())
            .then((data) => {
                if (data.error) {
                    throw data.error;
                }
                data.forEach(item => {
                    item.hidden = true
                });
                initialList = data;
                this.setState({list: data})
            })
    }

    handleClick = (index) => {
        const arr = this.state.list;
        const NewImem = this.state.list[index];
        NewImem.hidden = false;
        arr[index] = NewImem;
        this.setState({
            list: arr
        })
    };

    handleSearch = ({ target: { value } }) => {
        const filtered = initialList.filter(item => item.title.includes(value));
        this.setState({
            searchVal: value,
            list: filtered
        })
    };

    render() {
        const {list, searchVal} = this.state;
        return (
            <div>
                <input
                    type="text"
                    value={searchVal}
                    placeholder="Search"
                    onChange={this.handleSearch}
                />
                <ul className="list">
                    {list && list.map((item, index) => {
                        return <ol
                            className={item.completed ? "completed" : null}
                            key={item.id}
                            onClick={() => this.handleClick(index)}
                        >
                            {index + 1} {item.title}
                            {!item.hidden ?
                                <>
                                    <button>delete</button>
                                    <button>done</button>
                                    <button>in progress</button>
                                </>
                                : null}
                        </ol>
                    })}
                </ul>
            </div>


        );
    }
}

export default ToDoComponent;
