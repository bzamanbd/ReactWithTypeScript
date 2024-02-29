import { useState } from 'react';
import style from './style.module.css';

export default function Login() {
    interface IUser {
        name: string;
        email: string;
        password: string;
    }
    const [user, setUser] = useState<IUser>({ name: '', email: '', password: '' });
    const { name, email, password } = user;

    function handleUser(e: { target: { name: string; value: string; }; }) {
        const fieldName = e.target.name;
        if (fieldName === 'name') {
            setUser({ name: e.target.value, email, password });
        } else if (fieldName === 'email') {
            setUser({ name, email: e.target.value, password });
        } else {
            setUser({ name, email, password: e.target.value });
        }

    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        console.log(user);


    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>

                <div className={style.formGroup} >
                    <label htmlFor="name">Name: <input type="text" id="name" name='name' onChange={handleUser} required /></label>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="email">Email: <input type="email" id="email" name='email' onChange={handleUser} required /></label>
                </div>

                <div className={style.formGroup}>
                    <label htmlFor="password">Pass: <input type="text" id="password" name='password' onChange={handleUser} required /></label>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
