import * as React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OpcionesFamiliar = ({ onClose }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.opcionesFamiliar}>
      <View style={styles.primoaMaternoaParent}>
        <Pressable onPress={() => navigation.navigate("MisFamiliares")}>
          <Text style={[styles.primoaMaternoa1, styles.primoaTypo]}>
            Primo/a materno/a
          </Text>
        </Pressable>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Primo/a paterno/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Tio/a materno/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Tio/a paterno/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Abuelo/a materno/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Abuelo/a paterno/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Hermano/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>
          Sobrino/a
        </Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.primoaPaternoa, styles.primoaTypo]}>Cuñado/a</Text>
        <Image
          style={styles.frameChild}
          contentFit="cover"
          source={require("../assets/line-78.png")}
        />
        <Text style={[styles.aadir, styles.primoaTypo]}>+ Añadir</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  primoaTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  primoaMaternoa1: {
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  frameChild: {
    marginTop: 20,
    width: 388,
    maxHeight: "100%",
  },
  primoaPaternoa: {
    marginTop: 20,
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  aadir: {
    color: Color.primario1,
    marginTop: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  primoaMaternoaParent: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 388,
  },
  opcionesFamiliar: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.white,
    width: 428,
    height: 590,
    maxWidth: "100%",
    maxHeight: "100%",
  },
});

export default OpcionesFamiliar;
