import React from 'react';

export const PeopleList = (props) => {
    return (
        <div>
            {
                props.people.map(person => {
                    return (
                        <div key={person.first_name} className='box'>
                            <p>
                                <strong>{person.first_name} {person.last_name}:</strong> {person.email}
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
};