import React from 'react';
import './CardGrid.css';
import Card from './Card';

// CardGrid component
const CardGrid = () => {
  // Updated cards data to match the tools for teachers
  const cards = [
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Text Rewriter',
      description:
        'Take any text and rewrite it with custom criteria however you’d like!',
      icon: '✍️',
      isNew: false,
    },
    {
      title: 'Multiple Choice Assessments',
      description:
        'Create a multiple choice assessment based on any topic, standard(s), or criteria!',
      icon: '📝',
      isNew: false,
    },
    {
      title: 'Report Card Comments',
      description:
        "Generate report card comments with a student's areas for growth.",
      icon: '📊',
      isNew: false,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },
    {
      title: 'Custom Chatbot',
      description:
        'Create a custom chatbot to interact with based on any criteria that you choose!',
      icon: '🤖',
      isNew: true,
    },

    // ...add more cards based on the remaining tools
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
          isNew={card.isNew}
        />
      ))}
    </div>
  );
};

export default CardGrid;
