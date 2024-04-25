import s from './DeleteBtn.module.scss'
const DeleteBtn = ({type, children}) => {
    return ( <button type='submit' className={'btn bg-red-600 ' + s.btn}>
    {children}
    </button> );
}
 
export default DeleteBtn;