import React , {Component} from 'react';

class TouDoumList extends Component{
    constructor() {
        super();
        this.state = {
            userInput: '',
            items: []
        };
    }

    onChange(event) {
       this.setState({
           userInput: event.target.value
       });
    } 

    addTouDoum(event) {
        event.preventDefault();
        this.setState({
            userInput: '',
            items: [...this.state.items, this.state.userInput]
        });
    }

    deleteTouDoum(item) {
        const array = this.state.items;
        const index = array.indexOf(item);
        array.splice(index, 1);
        this.setState({
            items: array
        });
    }

    renderTouDoums(){
        return this.state.items.map((item) => {
            return (
                <div className='list-group-item' key={item}>
                    {item} | <button onClick={this.deleteTouDoum.bind(this, item)}> X </button>
                </div>
            )
        })
    }

render(){
    return (
        <div className='form'>
            <form className='form-row'>
                <input className='form-control mb-2' type='text' placeholder='Notez votre envie de film pour ne pas la perdre!' value={this.state.userInput} onChange={this.onChange.bind(this)}></input>
                <button className='btn btn-danger' onClick={this.addTouDoum.bind(this)} type='submit'> Noté! </button>
            </form>

            <div className='list-group'>
                {this.renderTouDoums()}
            </div>
        </div>

    )

}
}
export default TouDoumList
