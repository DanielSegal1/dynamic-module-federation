import './button.css';

const Button = ({number}) => {
    return <div className='vite-root'>
                <div className='button'>
                <button>vite guest {number}</button>
            </div>
        </div>
};

export default Button;
