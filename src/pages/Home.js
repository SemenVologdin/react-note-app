import React from 'react';

import { Form } from '../components/Form';
import { Notes } from '../components/Notes';
import { Loader } from '../components/Loader';
import { FirebaseContext } from '../context/firebase/firebaseContext';

export const Home = () => {
  const { loading, notes, fetchNOTES, removeNote } = React.useContext(FirebaseContext);

  React.useEffect(() => {
    fetchNOTES();
  }, []);

  return (
    <>
      <Form />
      <hr />
      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </>
  );
};
