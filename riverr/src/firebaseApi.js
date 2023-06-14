import firebase from './firebase';

// Save counter data to Firebase
export const saveCounter = (counter) => {
    const { id, value, label } = counter;
    firebase.database().ref(`counters/${id}`).set({ value, label });
};

// Remove counter data from Firebase
export const removingCounter = (id) => {
    firebase.database().ref(`counters/${id}`).remove();
};
