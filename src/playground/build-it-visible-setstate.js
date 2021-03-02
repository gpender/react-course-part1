class Visible extends React.Component{
    constructor(props){
        super(props);
        this.onToggleVisible = this.onToggleVisible.bind(this);
        this.state = {
            visible:false
        }
    }
    onToggleVisible(){
        console.log(this.state.visible)
        this.setState((prevState)=>{
            return{
                visible:!prevState.visible

            }
        })
    }
    render(){
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.onToggleVisible}>{this.state.visible?"Hide":"Show"}</button>
            {this.state.visible && <h1>Visible</h1>}
            </div>
        );  
    }
}
const divId = document.getElementById('app');

ReactDOM.render(<Visible/>,divId);


// let visible = false;
// const onClick=()=>{
//     visible = !visible;
//     render();
// };

// const render = ()=>{
//     const template=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onClick}>{visible?'Hide options':'Show Options'}</button>
//             {visible &&  
//                 <ul>
//                     <li>One</li>
//                     <li>One</li>
//                     <li>One</li>
//                 </ul>
//             }
//         </div>
//     );
//     const divId = document.getElementById('app');
    
//     ReactDOM.render(template,divId);
// }

// render();