let visible = false;
const onClick=()=>{
    visible = !visible;
    render();
};

const render = ()=>{
    const template=(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onClick}>{visible?'Hide options':'Show Options'}</button>
            {visible &&  
                <ul>
                    <li>One</li>
                    <li>One</li>
                    <li>One</li>
                </ul>
            }
        </div>
    );
    const divId = document.getElementById('app');
    
    ReactDOM.render(template,divId);
}

render();