import { EmptyState } from '@shopify/polaris'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Form() {
    const [input, setInput] = useState("")
    const [email, setemail] = useState("")

    const url = 'https://api.surveysparrow.com/v1/shares/email/2233677'
    const bearer = 'Bearer ' + 'prUJqEHlpzWrjBGP477dWklUz2sP6YlxMb4x0tY4J1rgW59TIJei20mhE2bpSvmnt56tG9N5xRMBmwMYDSkVQ4NQ';

    useEffect(() => {
        const requestOptions = {
            method: 'PUT',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer,
            },
            body: JSON.stringify({
                "contacts": [email]
            })
        };
        fetch(url, requestOptions)
            .then(
                console.log("sent") 
            )
    }, [email]);


    const sendSurveys = (e) => {
        e.preventDefault();
        if (input) {
            setemail(input);
            console.log(email)
            setInput("");
        }
    }

    return (
        <EmptyState
            heading="Share Survey through emails"
        >
            {/* <p>Enter the email address of customers.</p> */}
            <form onSubmit={sendSurveys}>
                <label for="name">Name</label>
                <input
                    placeholder="Email id"
                    type="input"
                    name="input"
                    id="input"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                {/* <br/>
                <button type="submit">Submit</button> */}
            </form>
        </EmptyState>
    )
}

export default Form
