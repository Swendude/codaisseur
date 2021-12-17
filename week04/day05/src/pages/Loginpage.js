import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {login} from "../store/auth/actions";
import { selectMe } from "../store/auth/selector";

export default function LoginPage() {

    const dispatch = useDispatch();
    const me = useSelector(selectMe)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(login(email, password));

    }

    return (
        <div>
            <h1>Login</h1>
            {me ? <p>Hello {me.name}</p> : <div/>}
            <form onSubmit={handleSubmit}>
                <p>
                    <label>
                        Email:
                    </label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value) }
                    />
                </p>
                <p>
                    <label>
                        Password:
                    </label>
                    <input
                        type="text"
                        value={password}
                        onChange={(e) => setPassword(e.target.value) }
                    />
                </p>
                <p>
                    <button type="submit">Login</button>
                </p>
            </form>
        </div>
    )
}