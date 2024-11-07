import React from 'react';
import useApiData from '../hooks/useApiData';

const EditorChoice = () => {
  const { data, loading, error } = useApiData(`${import.meta.env.VITE_API_URL}/api/v1/editor-choice/`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const { hero } = data;

  return (
    <div className="editor-choice">
      <a href={data.link} target="_blank" rel="noopener noreferrer">
        <img src={data.src} alt={data.title} className="editor-choice-image" />
        <h3 className="editor-choice-title">{data.title}</h3>
      </a>
    </div>
  );
};

export default EditorChoice;