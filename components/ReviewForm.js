import { EmptyState } from '@shopify/polaris'
import React, { useEffect } from 'react'
import { useState } from 'react'

function ReviewForm() {
    const [input, setInput] = useState("")
    const [email, setemail] = useState("")

    // endpoint to share a form through mail
    const url = 'https://api.surveysparrow.com/v1/surveys/88713/sections'
    const bearer = 'Bearer ' + 'prmBB9NJSm3a6kmcwxsnUfwZviZpuItiOKlqxVyY2vMcI3HBszI_LqBgYcEaA4PEebPUcfntIQXcL_q8YeFAwSUw';
    const json_query = {
        "name": "Welcome to Review Form",
        "description": "This is section will be based on the leadership quality",
        "properties": {
            "label": "start a this section"
        },
        "questions": [{
            "text": "Please enter your feedback",
            "type": "TextInput",
            "properties": {
                "data": {
                    "type": "MULTI_LINE"
                }
            }
        }, {
            "text": "Please give your rating",
            "type": "OpinionScale",
            "properties": {
                "data": {
                    "min": "min label",
                    "max": "max label",
                    "start": 1,
                    "step": 7
                }
            }
        }]
    }

    useEffect(() => {
        const requestOptions = {
            method: 'POST',
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': bearer,
            },
            body: JSON.stringify(json_query)
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
            heading="Share Review Survey through emails"
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

export default ReviewForm
