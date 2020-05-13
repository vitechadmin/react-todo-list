import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from 'uuid';

class App extends Component {
    state = {
        items: [],
        id: uuidv4(),
        item: "",
        editItem: false
    }
    handleChange = (e) => {
        this.setState({
            item: e.target.value
        });
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item
        };
        //console.log(newItems);

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            id: uuidv4(),
            editItem: false
        });
    };
    clearList = () => {
        this.setState({
            items: []
        });
    };
    handleDelete = (id) => {
        const FilteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: FilteredItems
        });
    };
    handleEdit = id => {
        const FilteredItems = this.state.items.filter(item => item.id !== id);

        const selectItem = this.state.items.find(item => item.id ===id)
        this.setState({
            items: FilteredItems,
            item: selectItem.title,
            editItem: true,
            id: id
        });
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 max-auto col-md-8 mt-4">
                        <h3 className="text-capitalize text-center"> Todo Input </h3>
                        <TodoInput
                            item={this.state.item}
                            handleChange={this.handleChange}
                            handleSubmit={this.handleSubmit}
                            editItem={this.state.editItem}
                        />
                        <TodoList
                            items={this.state.items}
                            clearList={this.clearList}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                        />

                    </div>
                </div>
            </div>

        );
    }

}

export default App;
