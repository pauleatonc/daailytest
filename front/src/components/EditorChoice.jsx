import React from 'react';
import useApiData from '../hooks/useApiData';

const EditorChoice = () => {
  const { data, loading, error } = useApiData();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const { hero } = data;

  return (
    <div className="editor-choice">
      <a href={hero.editor_choice.link} target="_blank" rel="noopener noreferrer">
        <img src={hero.editor_choice.src} alt={hero.editor_choice.title} className="editor-choice-image" />
        <h3 className="editor-choice-title">{hero.editor_choice.title}</h3>
      </a>
    </div>
  );
};

export default EditorChoice;