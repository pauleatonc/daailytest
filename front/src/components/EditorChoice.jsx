import React from 'react';
import useApiData from '../hooks/useApiData';

const EditorChoice = () => {
  const { data, loading, error } = useApiData(`${import.meta.env.VITE_API_URL}/api/v1/editor-choice/`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const { hero } = data;

  return (
    <div id="feat_side">
      <div id="editorschoice">
        <figure>
          <a href={data.link} title={data.title} target="_blank" rel="noopener noreferrer">
            <div
              className="editorchoice-img cover-img"
              style={{ backgroundImage: `url(${data.src})` }}
            ></div>
          </a>
        </figure>
        <h3 className="feats-title editorchoice-title">
          <span>Editor's Choice</span>
          <a href={data.link} title={data.title} target="_blank" rel="noopener noreferrer">
            {data.title}
          </a>
        </h3>
      </div>
      <div
        id="div-gpt-ad-1453208083452-0"
        className="js-slot ads-editor-choice ad-300-120"
        data-slot-name="ADGlobal_Home_Under_Editors_Choice_286x115"
        data-slot-size="[300, 120]"
        data-device="desktop"
        style={{ display: 'none' }}
      >
        <div className="loading-animation load-banner-under-editor"></div>
        <div id="google_ads_iframe_/1021178/ADGlobal_Home_Under_Editors_Choice_286x115_0__container__" style={{ border: 'none', width: '300px', height: '0px' }}></div>
      </div>
    </div>
  );
};

export default EditorChoice;