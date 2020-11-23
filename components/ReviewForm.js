import { EmptyState } from '@shopify/polaris'
import React, { useEffect } from 'react'
import { useState } from 'react'

function Form() {
    const [input, setInput] = useState("")
    const [email, setemail] = useState("")

    const url = 'https://api.surveysparrow.com/v1/shares/email/2238842'
    const bearer = 'Bearer ' + 'pr0XQuLJrxoeXIiJ6fhDnp_pJ3QgHQ2-8jY2xTrjbfLx1Iv-iFn6KxNtGi01SRDDFWJUmDpNS8SnawQl97OGIMkA';

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
                console.log("Review sent") 
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
            heading="Review form Survey from Customers through emails"
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
                <br/>
                <button type="submit">Submit</button>
            </form>
        </EmptyState>
    )
}

export default Form
