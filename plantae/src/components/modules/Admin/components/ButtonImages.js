import React, { useState, useEffect, useRef } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';

import './style.css'
import DataBunga from '../DataBunga'
import FormPost from './FormPost';
import { Alert } from 'react-bootstrap';

const ButtonImages = () => {
    const [isModelLoading, setIsModelLoading] = useState(false);
    const [model, setModel] = useState(null);
    const [imgURL, setImageURL] = useState(null)
    const [results, setResults] = useState([]);

    const imageRef = useRef();
    const textInputRef = useRef();
    const fileInputRef = useRef();

    const loadModel = async () => {
        setIsModelLoading(true)
        try {
            const model = await mobilenet.load();
            setModel(model)
            setIsModelLoading(false)
        } catch (error) {
            console.log(error);
            setIsModelLoading(false)
        }
    }

    const uploadImage = (e) => {
        const { files } = e.target;
        if (files.length > 0) {
            const url = URL.createObjectURL(files[0]);
            setImageURL(url);
        } else {
            setImageURL(null);
        }
    }

    const identify = async (e) => {
        e.preventDefault()
        textInputRef.current.value = ''
        const results = await model.classify(imageRef.current)
        setResults(results);
    }

    const handleOnChange = (e) => {
        setImageURL(e.target.value);
        setResults([]);
    }

    const triggerUpload = () => {
        fileInputRef.current.click();
    }

    useEffect(() => {
        // Memuat model TensorFlow.js ketika komponen dipasang
        loadModel();
    }, []);

    if (isModelLoading) {
        return <h2>Model Loading...</h2>
    }

    const AvailableProduct = DataBunga;
    console.log(AvailableProduct);

    const currentFlower = results[0] && results[0].className;
    console.log(currentFlower);

    const isexist = AvailableProduct.filter((item) => item.nama === currentFlower);
    if(Object.values(isexist).length > 0) {
        console.log('true');
        return <FormPost />
    } else {
        <Alert variant='danger'>
            sorry this image is unavailable, please choose another image
        </Alert>
        console.log('false');
    }

    return (
        <>
            <div className="App">
                <div className="inputHolder">
                    <input type='file' accept='image/*' capture='camera' className='uploadInput' onChange={uploadImage} ref={fileInputRef} />
                    <button className='uploadImage' onClick={triggerUpload}>Upload Image</button>
                    <span className="or">OR</span>
                    <input type="text" placeholder='Enter URL image...' ref={textInputRef} onChange={handleOnChange} />
                </div>
                <div className="mainWrapper">
                    <div className="mainContent">
                        <div className="imageHolder">
                            {imgURL && <img src={imgURL} alt="preview" crossOrigin='anonymous' ref={imageRef} />}
                        </div>
                        {results.length > 0 && <div className='resultsHolder'>
                            {results.map((result, index) => {
                                return (
                                    <div className="result" key={result.className}>
                                        <span className="name">{result.className}</span>
                                        <span className="confidence">Confidence level: {(result.probability * 100).toFixed(2)}%
                                            {index === 0 && <span className='bestGuess'>Best Guess</span>}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>}
                    </div>
                    {imgURL && <button className='button' onClick={identify}>Identify image</button>}
                </div>
            </div>
        </>
    );
}

export default ButtonImages;