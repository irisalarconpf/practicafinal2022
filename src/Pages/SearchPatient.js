import React, {Component} from "react";
import NavBar from "../Components/NavBar";
import {db} from "../firebase";
import AsyncSelect from "react-select/async";


class SearchPatient extends Component{
    constructor(props) {
        super(props);
        this.state = {
            selectedTag: []
        }
    }

    loadOptions = async (inputValue) => {
        inputValue = inputValue.toLowerCase().replace(/\W/g, "");
        return new Promise((resolve => {
                db.collection('patient')
                    //.orderBy('created')
                    .startAt(inputValue)
                    .endAt(inputValue + "\uf8ff")
                    .get()
                    .then(docs => {
                        if (!docs.empty) {
                            let recommendedTags = []
                            docs.forEach(function (doc) {
                                const tag = {
                                    value: doc.id,
                                    label: doc.data().surname
                                }
                                recommendedTags.push(tag)
                            });
                            return resolve(recommendedTags)
                        } else {
                            return resolve([])
                        }
                    })

            })
        )
    }

    handleOnChange = (tags) => {
        this.setState({
            selectedTag: [tags]
        })
    }

    render() {
        return (
            <>
            <NavBar />
            <div>
                <AsyncSelect
                loadOptions={this.loadOptions}
                onChange={this.handleOnChange}/>
                <p>Selected Tag:</p>
                {
                    this.state.selectedTag.map(e =>{
                        return(
                            <li key={e.value}>
                                {e.label}
                            </li>
                        )
                    })
                }
            </div>
            </>
        );
    }
}

export default SearchPatient;