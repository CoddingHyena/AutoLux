
  const user = useAppSelector((store) => store.userSlice.user);


 


  return (
    <>
      {user.id > 0 ? (
        <div className="listTodo"></div>
      ) : (
        <div>
          <span>Зарегистрируйся!</span>
        </div>
      )}
    </>
  );
}





import { useDispatch } from 'react-redux';

import { fetchLogout } from '../../redux/User/userThunkAction';

function LoggedUser() {
  const currentUser = useAppSelector((store) => store.userSlice.user);