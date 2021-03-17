import styled from '@emotion/styled';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

export const CreateContent: FC<{ create: (text: string) => void }> = ({ create }) => {
  const { handleSubmit, register, control } = useForm<{ name: string }>();
  const onSubmit = (data: { name: string }) => {
    create(data.name);
    control.setValue('name', '');
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input type="text" name="name" placeholder="Crea contenuto" defaultValue="" ref={register({ required: true })} />
      <input type="submit" />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  padding: 10px;
  display: flex;

  input[type="text"] {
    flex: 1;
    border: 0;
    background: #f1f1f1;
    padding: 10px;
    border-radius: 7px 0 0 7px;
  }
  input[type="submit"] {
    border: 0;
    background: #1ec87b;
    padding: 10px;
    border-radius: 0 7px 7px 0;
    font-weight: bold;
    color: white;
  }
`;
