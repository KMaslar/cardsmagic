import React from 'react';

class TypeItem extends React.Component {
    constructor() {
        super();
    }

    render () {
        let items = this.state.types;
        let optionItems = items.map((item) =>
                <option key={item.types}>{item.types}</option>
            );

        return (
         <div>
             <select>
                {optionItems}
             </select>
         </div>
        )
    }
}


export default TypeItem;