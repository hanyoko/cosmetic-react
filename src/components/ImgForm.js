import axios from 'axios';
import React, { useState } from 'react';
import { API_URL } from '../config/apiurl';

const ImgForm = () => {
    const [ imageUrl, setImageUrl ] = useState(null);
    const onChangeImage = (e) => {
        const { name } = e.target;
        //<form> 태그생성
        const imageFormData = new FormData();
        //<form> 태그에 속성 추가하기
        imageFormData.append(name, e.target.files[0]);
        axios.post(`${API_URL}/upload`, imageFormData, {
            Headers: {'content-type' : 'multipart/formdata'},
        }).then(res=>{
            console.log(res);
            setImageUrl(res.data.imageUrl);
        }).catch(e=>{
            console.log(e);
        })
    }
    return (
        <div>
            <table>
                <tr>
                    <td>file</td>
                    <td>
                        <input type="file" name="file" onChange={onChangeImage} />
                        {
                            imageUrl ? <img src={imageUrl} alt=""
                            width="200px" height="200px" /> :
                            (<div id="upload-img-bg">
                                <img src="images/camera.png" alt="" width="200px" height="200px" />
                            </div>)
                        }
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default ImgForm;
