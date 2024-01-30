import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MISAMIGOS = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.misAmigos, styles.iconLayout]}>
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require("../assets/navigation1.png")}
      />
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View>
          <Text style={[styles.amigosPersonales, styles.amigosTypo]}>
            Amigos personales
          </Text>
          <Image
            style={[styles.frameChild, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/line-785.png")}
          />
        </View>
        <View style={styles.frameGroup}>
          <View style={styles.maskGroupWrapper}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group16.png")}
            />
          </View>
          <View style={styles.umbertoDeMartiniParent}>
            <Text style={[styles.amigosPersonales, styles.amigosTypo]}>
              Umberto de Martini
            </Text>
            <Text style={[styles.tuAmigoPrivado, styles.amigosTypo]}>
              Tu amigo privado
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.amigosDeSalsaParent, styles.frameParentPosition]}>
        <Text style={[styles.amigosDeSalsa, styles.amigosPosition]}>
          Amigos de Salsa
        </Text>
        <Image
          style={[styles.frameItem, styles.frameLayout]}
          contentFit="cover"
          source={require("../assets/line-782.png")}
        />
        <View style={styles.frameContainer}>
          <View style={styles.maskGroupWrapper}>
            <Image
              style={styles.maskGroupIcon}
              contentFit="cover"
              source={require("../assets/mask-group16.png")}
            />
          </View>
          <View style={styles.umbertoDeMartiniParent}>
            <Text style={[styles.amigosPersonales, styles.amigosTypo]}>
              Mariana Perez
            </Text>
            <Text style={[styles.tuAmigoPrivado, styles.amigosTypo]}>
              Amiga
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.frameView}>
        <View style={styles.amigosDelTrabajoParent}>
          <Text style={[styles.amigosDeSalsa, styles.amigosPosition]}>
            Amigos del trabajo
          </Text>
          <Image
            style={[styles.frameItem, styles.frameLayout]}
            contentFit="cover"
            source={require("../assets/line-785.png")}
          />
        </View>
        <View style={styles.frameParent1}>
          <View style={styles.frameParent2}>
            <View style={styles.maskGroupFrame}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require("../assets/mask-group16.png")}
              />
            </View>
            <View style={styles.juanDiazParent}>
              <Text style={[styles.amigosPersonales, styles.amigosTypo]}>
                Juan Diaz
              </Text>
              <Text style={[styles.tuAmigoPrivado, styles.amigosTypo]}>
                Amigo
              </Text>
            </View>
          </View>
          <View style={styles.frameParent3}>
            <View style={styles.maskGroupWrapper}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require("../assets/mask-group16.png")}
              />
            </View>
            <View style={styles.umbertoDeMartiniParent}>
              <Text style={[styles.amigosPersonales, styles.amigosTypo]}>
                Carlos Martinez
              </Text>
              <Text style={[styles.tuAmigoPrivado, styles.amigosTypo]}>
                Amigo
              </Text>
            </View>
          </View>
          <View style={styles.frameParent3}>
            <View style={styles.maskGroupWrapper}>
              <Image
                style={styles.maskGroupIcon}
                contentFit="cover"
                source={require("../assets/mask-group16.png")}
              />
            </View>
            <View style={styles.umbertoDeMartiniParent}>
              <Text style={[styles.amigosPersonales, styles.amigosTypo]}>
                Maria Florez
              </Text>
              <Text style={[styles.tuAmigoPrivado, styles.amigosTypo]}>
                Amiga
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.misAmigosChild, styles.amigosPosition]} />
      <View style={styles.backParent}>
        <Pressable
          style={styles.back}
          onPress={() => navigation.navigate("PERFILMIINFO")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <View style={styles.misAmigosParent}>
          <Text style={[styles.misAmigos1, styles.amigosTypo]}>Mis Amigos</Text>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector49.png")}
          />
        </View>
      </View>
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.iconlylightOutlinecalendarParent}>
        <Image
          style={styles.back}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinecalendar.png")}
        />
        <Image
          style={[styles.documentIcon, styles.documentIconLayout]}
          contentFit="cover"
          source={require("../assets/document2.png")}
        />
        <Image
          style={styles.documentIconLayout}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinesetting.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  frameParentPosition: {
    marginLeft: -203,
    left: "50%",
    position: "absolute",
  },
  amigosTypo: {
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  frameLayout: {
    maxHeight: "100%",
    width: 406,
  },
  amigosPosition: {
    top: 0,
    position: "absolute",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  navigationIcon: {
    top: 821,
    height: 105,
    width: 428,
    left: 0,
    position: "absolute",
  },
  amigosPersonales: {
    fontWeight: "500",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
  },
  frameChild: {
    marginTop: 10,
    width: 406,
  },
  maskGroupIcon: {
    width: 54,
    height: 54,
  },
  maskGroupWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  tuAmigoPrivado: {
    fontStyle: "italic",
    fontWeight: "300",
    marginTop: 5,
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  umbertoDeMartiniParent: {
    marginLeft: 20,
  },
  frameGroup: {
    marginTop: 20,
    flexDirection: "row",
  },
  frameParent: {
    top: 151,
    left: "50%",
  },
  amigosDeSalsa: {
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "500",
    lineHeight: 24,
    fontSize: FontSize.size_xl,
    left: 0,
  },
  frameItem: {
    top: 34,
    width: 406,
    left: "50%",
    marginLeft: -203,
    position: "absolute",
  },
  frameContainer: {
    top: 54,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  amigosDeSalsaParent: {
    top: 278,
    height: 115,
    width: 406,
    left: "50%",
  },
  amigosDelTrabajoParent: {
    height: 34,
    width: 406,
  },
  maskGroupFrame: {
    justifyContent: "center",
  },
  juanDiazParent: {
    marginLeft: 20,
    justifyContent: "center",
  },
  frameParent2: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent3: {
    marginTop: 5,
    alignItems: "center",
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 20,
  },
  frameView: {
    top: 413,
    left: 11,
    position: "absolute",
  },
  misAmigosChild: {
    marginLeft: -214,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
    left: "50%",
    width: 428,
    backgroundColor: Color.white,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  back: {
    height: 24,
    width: 24,
  },
  misAmigos1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 241,
  },
  vectorIcon: {
    width: 20,
    height: 20,
    marginLeft: 80,
  },
  misAmigosParent: {
    marginLeft: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  backParent: {
    top: 78,
    left: 23,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  image6Icon: {
    top: 3,
    left: 20,
    width: 87,
    height: 55,
    position: "absolute",
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    top: 20,
    left: 219,
    width: 189,
    justifyContent: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  misAmigos: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MISAMIGOS;
