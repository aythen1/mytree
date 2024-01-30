import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Padding, Border, FontFamily, Color } from "../GlobalStyles";

const BIO2Ancestro = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bio2Ancestro}>
      <View
        style={[styles.personalidadBienPeroNuncMParent, styles.iconPosition]}
      >
        <Text style={styles.containerLayout}>
          <Text style={styles.personalidadBienPeroContainer1}>
            <Text style={styles.personalidad}>{`Personalidad
`}</Text>
            <Text
              style={styles.bienPeroNunc}
            >{`Bien, pero nunc mattis. Mauris feugiat non interdum enim nullam ullamcorper. At enim egestas nisl pellentesque mattis turpis eu. `}</Text>
          </Text>
        </Text>
        <Text style={[styles.vnculosRcuNuncContainer, styles.containerLayout]}>
          <Text style={styles.personalidadBienPeroContainer1}>
            <Text style={styles.personalidad}>{`Vínculos
`}</Text>
            <Text style={styles.bienPeroNunc}>
              rcu nunc mattis. Mauris feugiat non interdum enim nullam
              ullamcorper.
            </Text>
          </Text>
        </Text>
        <Text style={[styles.vnculosRcuNuncContainer, styles.containerLayout]}>
          <Text style={styles.personalidadBienPeroContainer1}>
            <Text style={styles.personalidad}>{`Expresiones y gestos
`}</Text>
            <Text style={styles.bienPeroNunc}>
              rcu nunc mattis. Mauris feugiat non interdum enim nullam
              ullamcorper.
            </Text>
          </Text>
        </Text>
        <Text style={[styles.vnculosRcuNuncContainer, styles.containerLayout]}>
          <Text style={styles.personalidadBienPeroContainer1}>
            <Text style={styles.personalidad}>{`Pasatiempos y gustos
`}</Text>
            <Text style={styles.bienPeroNunc}>
              rcu nunc mattis. Mauris feugiat non interdum enim nullam
              ullamcorper.
            </Text>
          </Text>
        </Text>
        <Text style={[styles.vnculosRcuNuncContainer, styles.containerLayout]}>
          <Text style={styles.personalidadBienPeroContainer1}>
            <Text style={styles.personalidad}>{`Valores y saberes
`}</Text>
            <Text style={styles.bienPeroNunc}>
              rcu nunc mattis. Mauris feugiat non interdum enim nullam
              ullamcorper.
            </Text>
          </Text>
        </Text>
      </View>
      <Image
        style={[styles.navigationIcon, styles.tabsBarPosition]}
        contentFit="cover"
        source={require("../assets/navigation19.png")}
      />
      <View style={styles.rectangleParent}>
        <View style={styles.frameChild} />
        <Image
          style={[styles.image6Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/image-6.png")}
        />
        <View style={styles.vectorParent}>
          <Image
            style={styles.iconlyLayout}
            contentFit="cover"
            source={require("../assets/vector20.png")}
          />
          <View style={[styles.iconly, styles.iconlyLayout]}>
            <Image
              style={styles.notificationIcon}
              contentFit="cover"
              source={require("../assets/notification3.png")}
            />
            <View style={styles.ellipseParent}>
              <Image
                style={styles.groupChild}
                contentFit="cover"
                source={require("../assets/ellipse-2262.png")}
              />
              <Text style={styles.text}>1</Text>
            </View>
          </View>
          <Pressable
            style={[styles.iconly, styles.iconlyLayout]}
            onPress={() => navigation.navigate("PERFILANCESTROAJUSTES1")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlylightoutlinesetting3.png")}
            />
          </Pressable>
          <Pressable
            style={styles.iconlycurveddocument}
            onPress={() => navigation.navigate("PERFILANCESTROAJUSTES")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/iconlycurveddocument.png")}
            />
          </Pressable>
        </View>
        <Image
          style={[styles.ionmenuIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/ionmenu.png")}
        />
        <View style={[styles.tabsBar, styles.tabsBarPosition]}>
          <Pressable
            style={[styles.miBiografaWrapper, styles.tabsFlexBox]}
            onPress={() => navigation.navigate("PERFILIDANCESTRO")}
          >
            <Text style={[styles.miBiografa, styles.miInfoTypo]}>
              Mi Biografía
            </Text>
          </Pressable>
          <View style={[styles.tabs, styles.tabsFlexBox]}>
            <Text style={[styles.miInfo, styles.miInfoTypo]}>Mi info</Text>
          </View>
          <View style={styles.tabsBarChild} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    left: 20,
    position: "absolute",
  },
  containerLayout: {
    width: 388,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    lineHeight: 27,
    letterSpacing: 0,
    fontSize: FontSize.size_lg,
  },
  tabsBarPosition: {
    width: 428,
    left: "50%",
    marginLeft: -214,
    position: "absolute",
  },
  iconlyLayout: {
    height: 24,
    width: 24,
  },
  tabsFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_9xs,
    width: 214,
    borderRadius: Border.br_7xs,
    top: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  miInfoTypo: {
    textAlign: "center",
    lineHeight: 19,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  personalidad: {
    color: Color.primario2,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  bienPeroNunc: {
    color: Color.negro,
    fontFamily: FontFamily.lato,
  },
  personalidadBienPeroContainer1: {
    width: "100%",
  },
  vnculosRcuNuncContainer: {
    marginTop: 20,
  },
  personalidadBienPeroNuncMParent: {
    top: 207,
    height: 599,
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  frameChild: {
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    zIndex: 0,
    height: 186,
    width: 428,
    backgroundColor: Color.white,
  },
  image6Icon: {
    top: 2,
    width: 87,
    height: 55,
    zIndex: 1,
  },
  notificationIcon: {
    height: "83.33%",
    width: "70.83%",
    top: "8.33%",
    right: "14.58%",
    bottom: "8.33%",
    left: "14.58%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    top: 0,
    height: 16,
    width: 16,
    left: 0,
    position: "absolute",
  },
  text: {
    left: 5,
    fontSize: FontSize.size_3xs,
    letterSpacing: 0.2,
    fontWeight: "800",
    fontFamily: FontFamily.nunitoSans,
    textAlign: "right",
    color: Color.white,
    top: 1,
    position: "absolute",
  },
  ellipseParent: {
    top: -6,
    left: 13,
    height: 16,
    width: 16,
    position: "absolute",
  },
  iconly: {
    marginLeft: 20,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  iconlycurveddocument: {
    width: 19,
    height: 22,
    marginLeft: 20,
  },
  vectorParent: {
    top: 20,
    left: 257,
    width: 151,
    zIndex: 2,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  ionmenuIcon: {
    top: 86,
    width: 26,
    height: 20,
    zIndex: 3,
    overflow: "hidden",
  },
  miBiografa: {
    color: Color.grisGeneral,
  },
  miBiografaWrapper: {
    left: 0,
    overflow: "hidden",
  },
  miInfo: {
    color: Color.white,
    fontWeight: "700",
  },
  tabs: {
    left: 214,
    backgroundColor: Color.secundario,
  },
  tabsBarChild: {
    top: 39,
    borderStyle: "solid",
    borderColor: Color.backgroundPrimaryBackground,
    borderTopWidth: 1,
    width: 429,
    height: 1,
    left: 0,
    position: "absolute",
  },
  tabsBar: {
    top: 126,
    height: 40,
    zIndex: 4,
    backgroundColor: Color.white,
  },
  rectangleParent: {
    flexDirection: "row",
    height: 186,
    left: 0,
    top: 1,
    position: "absolute",
  },
  bio2Ancestro: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default BIO2Ancestro;
