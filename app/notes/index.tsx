import { FontAwesome } from '@expo/vector-icons';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
  
    FlatList,
} from "react-native";
import { FaEdit, FaTrash } from "react-icons/fa";
import React, { useState } from "react";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [show, setShow] = useState(false);
    const [note, setNote] = useState([
    ]);
    const [input, setInput] = useState("");
    const [updateData, setUpdateData] = useState(null);

    const handleDelete = (id) => {
   
        const filtered = note.filter((idx) => idx.id !== id);
        setNote(filtered);

    }
    const handleEdit = (item) => {
     
        setInput(item.text);
        setUpdateData(item);
        setShow(true)
    }
    return (
        <>
            {show ? (
                <AddNoteModal updateData={ updateData} setShow={setShow} input={input} setInput={setInput} setUpdateData={setUpdateData} setNote={setNote} note={note} />
            ) : (
                    
                        
            
            
                        <View style={styles.container}>
                            <FlatList data={note}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={styles.maindata}>
                                        <Text style={styles.datatext}>{item.text} </Text>
                                        <View style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:14}}>
                                       <FontAwesome name="edit" size={24} color="black" onPress={() => handleEdit(item)} />
                                     <FontAwesome name="trash" size={24} color="red" onPress={() => handleDelete(item.id)} />
                                            </View>
                                       
                                    </View>
                                )}
                            />
                             <TouchableOpacity style={styles.btn} onPress={() => setShow(true)}>
                        <Text style={styles.textBtn}>+ Add Notes</Text>
                    </TouchableOpacity>
                    </View>

                     
              
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
     backgroundColor:'#fff',
        flex: 1,
        
    padding:20,
        gap: '20px',
        flexDirection:'column',
    },
   
    maindata: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#f5f5f5',
        marginVertical: 5,
        borderRadius: 6,
        padding: 15,
        alignItems:'center'
    },

    btn: {
        position: 'absolute',
        bottom: 40,
        left: 40,
        right:40,


        padding: 15,
        backgroundColor: "#007BFF",
        borderRadius: 8,
        alignItems: 'center',
       
    },
    datatext: {
    fontSize:18,
},
    textBtn: {
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default NoteScreen;
