import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    FlatList,
} from "react-native";
import React, { useState } from "react";
import AddNoteModal from "@/components/AddNoteModal";

const NoteScreen = () => {
    const [show, setShow] = useState(false);
    const [note, setNote] = useState([
        {
            id: 1,
            text: "first Note",
        },
        {
            id: 2,
            text: "second note",
        },
        {
            id: 3,
            text: "first Note",
        },
        {
            id: 4,
            text: "second note",
        },
        
    ]);
    const [input, setInput] = useState("");
    return (
        <>
            {show ? (
                <AddNoteModal setShow={setShow} input={input} setInput={setInput} />
            ) : (
            
                        <View style={styles.container}>
                            <FlatList data={note}
                                keyExtractor={(item) => item.id}
                                renderItem={({ item }) => (
                                    <View style={styles.maindata}>
                                        <Text style={styles.datatext}>{item.text }</Text>
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
        padding:15
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
