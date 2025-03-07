/*
 * Copyright (c) Meta Platforms and its affiliates.
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import {
    ChatGPT,
} from "./ChatGPT.jsx";

function OnboardingComponent({onSubmit}) {
    return (
        <div>
            <Directions>
                This component only renders if you have chosen to assign an onboarding
                qualification for your task. Click the button to move on to the main
                task.
            </Directions>
            <div
                style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}
            >
                <button
                    className="button is-success"
                    style={{width: 'fit-content', marginBottom: '0.65rem'}}
                    onClick={() => onSubmit({success: true})}
                >
                    Move to Main Task
                </button>
                <button
                    className="button is-danger"
                    style={{width: 'fit-content'}}
                    onClick={() => onSubmit({success: false})}
                >
                    Get Blocked
                </button>
            </div>
        </div>
    );
}

function LoadingScreen() {
    return <Directions>Loading...</Directions>;
}

function Directions({children}) {
    return (
        <section className="hero is-light" data-cy="directions-container">
            <div className="hero-body">
                <div className="container">
                    <p className="subtitle is-5">{children}</p>
                </div>
            </div>
        </section>
    );
}

function SimpleFrontend({taskData, fullData, isOnboarding, onSubmit, onError, getAgentRegistration}) {
    const [answers, setAnswers] = React.useState({
        answer1: 'sample1',
        answer2: '',
    });
    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setAnswers({...answers, [name]: value});
    };
    return (
        <div className="p-14 grid grid-cols-12">
            <div className="p-4 col-span-6">
                <h2 className="text-2xl font-semibold mb-4">This is sample task</h2>
                <div>
                    <label htmlFor="answer2"
                           className="block text-sm font-medium text-gray-700">Input the number you see here to the box below and submit: <strong>{taskData.data.value}</strong></label>
                    <input
                        type="text"
                        id="answer2"
                        name="answer2"
                        value={answers.answer2}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button className="btn btn-outline mt-5" onClick={() => {
                    onSubmit(answers);
                }}>Submit
                </button>
            </div>
            <div className="p-4 col-span-6 h-96">
                <ChatGPT fullData={fullData} getAgentRegistration={getAgentRegistration}/>
            </div>
        </div>
    );
}

export {LoadingScreen, SimpleFrontend as BaseFrontend, OnboardingComponent};
