import styled from '@emotion/styled';
import React, { useState, ChangeEvent } from 'react';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #2c3e50;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  color: #7f8c8d;
  margin: 0;
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #34495e;
  margin: 0;
`;

const ImageSection = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const SuggestionSection = styled.div`
  grid-column: 1 / -1;
  background-color: #f8f9fa;
  padding: 2rem;
  border-radius: 8px;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  grid-column: 1 / -1;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
`;

const Button = styled.button`
  grid-column: 1 / -1;
  padding: 0.75rem 1.5rem;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #34495e;
  }

  &:disabled {
    background-color: #95a5a6;
    cursor: not-allowed;
  }
`;

const KnowledgeSharing: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Using emailjs-com would be a good solution for sending emails
      // For now, we'll use mailto as a temporary solution
      const mailtoLink = `mailto:rjmarkwart@gmail.com?subject=Knowledge Sharing Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;
      
      // Clear the form after submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.message;

  return (
    <Container>
      <ContentSection>
        <Title>Global Knowledge Sharing</Title>
        <Subtitle>Collaboration, Wisdom, Progress</Subtitle>
        <Paragraph>
          In today's interconnected world, knowledge sharing has become the cornerstone of human progress. By fostering an environment where ideas flow freely across borders and cultures, we create opportunities for unprecedented innovation and growth. Through collaborative efforts, we can tackle global challenges, spark creative solutions, and build bridges between diverse perspectives. This platform serves as a hub for thought leaders, innovators, and curious minds to connect, share insights, and shape the future of global learning. Together, we can harness the collective wisdom of humanity to drive meaningful change and create lasting impact.
        </Paragraph>
      </ContentSection>

      <ImageSection>
        <img 
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
          alt="People collaborating and sharing knowledge"
        />
      </ImageSection>

      <SuggestionSection>
        <p style={{ marginBottom: '1rem', color: '#666' }}>
          If you agree, disagree, have the same vision, have a different vision, want to collaborate or have a question - let me know
        </p>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })}
            required
          />
          <TextArea
            placeholder="Your message"
            value={formData.message}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setFormData({ ...formData, message: e.target.value })}
            required
          />
          <Button type="submit" disabled={!isFormValid || isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
      </SuggestionSection>
    </Container>
  );
};

export default KnowledgeSharing; 
