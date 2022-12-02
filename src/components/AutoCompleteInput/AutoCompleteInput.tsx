import React, {useEffect, useRef} from 'react';
import './AutoCompleteInput.css';
import getMatchedResults from "../../services/text-matcher/text-matcher";
const AutoCompleteInput = () => {
    const [searchedText, setSearchedText] = React.useState('');
    const [results, setResults] = React.useState<string[]>([]);
    const [hideNoResultsText, setHideNoResultsText] = React.useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        (async() => {
            setResults(await getMatchedResults(searchedText));
        })();
    }, [searchedText]);

    /**
     * This method sets the searchedText value and flips
     * the flag to hide/show the "no results" flag
     * @param value The text typed in the input
     */
    const handleTextInput = (value: string) => {
        if (!value.length) {
            setHideNoResultsText(true);
        }
        else if (hideNoResultsText && !results.length) {
            setHideNoResultsText(false);
        }
        setSearchedText(value);
    }

    return <div className={'autoCompleteInput container'}>
        <div className={'overlay'}></div>
        <input autoFocus={true} data-testid={'input'} placeholder={'Input a country name...'} ref={inputRef}
               onKeyDown={(event) => handleTextInput((event.target as HTMLInputElement).value?.toLowerCase())}
               onKeyUp={(event) => handleTextInput((event.target as HTMLInputElement).value?.toLowerCase())}
               className={'autoCompleteInput textInput'} />
        {
            results.length > 0 && <div className={'autoCompleteInput results'}>
                {
                    results.map((entry: string) => {
                        const startPosition = entry.toLowerCase().indexOf(searchedText);
                        const pieces = entry.toLowerCase().split('');

                        return <div key={entry}
                                    onClick={() => {
                                        if (inputRef !== null) {
                                            if (inputRef.current !== null) {
                                                inputRef.current.value = entry;
                                                handleTextInput('');
                                            }
                                        }
                                    }}>{
                            pieces.map((piece: string, currentIndex: number) => {
                                const formattedPiece = (currentIndex === 0 && piece.toUpperCase()) || piece;
                                return currentIndex >= startPosition && currentIndex <
                                    (startPosition + searchedText.length) ?
                                    <span><b>{formattedPiece}</b></span> :
                                    <span>{formattedPiece}</span>
                            })
                        }</div>
                    })
                }
            </div>
        }
        {
            results.length === 0 && !hideNoResultsText && <div className={'autoCompleteInput results'}>
                <span className={'autoCompleteInput noResults'}>No results</span>
            </div>
        }
    </div>
}

export default AutoCompleteInput;