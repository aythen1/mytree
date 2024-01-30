import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const AadirRecuerdo1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aadirRecuerdo}>
      <View style={styles.frameParent}>
        <View style={styles.image6Parent}>
          <Image
            style={styles.image6Icon}
            contentFit="cover"
            source={require("../assets/image-6.png")}
          />
          <View style={styles.frameGroup}>
            <View style={styles.frameContainer}>
              <View style={styles.groupParent}>
                <Pressable
                  style={styles.wrapper}
                  onPress={() => navigation.navigate("MUROINFORMACIN")}
                >
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/group-6846.png")}
                  />
                </Pressable>
                <Text style={[styles.subirRecuerdo, styles.recientesTypo]}>
                  Subir recuerdo
                </Text>
              </View>
              <Pressable
                style={styles.back}
                onPress={() => navigation.navigate("AadirRecuerdo")}
              >
                <Image
                  style={[styles.icon1, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/back3.png")}
                />
              </Pressable>
            </View>
            <View style={styles.frameView}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-1547755266.png")}
              />
              <View style={styles.frameParent1}>
                <View style={styles.recientesParent}>
                  <Text style={[styles.recientes, styles.recientesPosition]}>
                    Recientes
                  </Text>
                  <Image
                    style={styles.stroke1Icon}
                    contentFit="cover"
                    source={require("../assets/stroke11.png")}
                  />
                </View>
                <View style={styles.selectMultipleParent}>
                  <View style={styles.selectMultiple}>
                    <View style={[styles.rectangle, styles.rectangleBg]} />
                    <View style={styles.multiSelectIconParent}>
                      <Image
                        style={styles.multiSelectIcon}
                        contentFit="cover"
                        source={require("../assets/multi-select-icon.png")}
                      />
                      <Text style={styles.selectMultiple1}>
                        SELECCIONAR VARIOS
                      </Text>
                    </View>
                  </View>
                  <View style={styles.rectangleParent}>
                    <View style={[styles.rectangle1, styles.rectangleBg]} />
                    <Image
                      style={styles.solarcameraOutlineIcon}
                      contentFit="cover"
                      source={require("../assets/solarcameraoutline.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.recentsSectionParent}>
          <View style={[styles.recentsSection, styles.recientesPosition]}>
            <Image
              style={styles.maskGroupLayout}
              contentFit="cover"
              source={require("../assets/mask-group.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group1.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group2.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group3.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group4.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group5.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group6.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group7.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group8.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group9.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group10.png")}
            />
            <Image
              style={[styles.maskGroupIcon1, styles.maskGroupLayout]}
              contentFit="cover"
              source={require("../assets/mask-group11.png")}
            />
          </View>
          <View style={styles.selectMultiple2}>
            <View style={[styles.rectangle2, styles.rectanglePosition]} />
            <Text style={styles.selectMultiple3}>PUBLICAR</Text>
            <Text style={[styles.selectMultiple4, styles.selectTypo]}>
              HISTORIA
            </Text>
            <Text style={[styles.selectMultiple5, styles.selectTypo]}>
              REEL
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.navigationIcon}
        contentFit="cover"
        source={require("../assets/navigation4.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recientesTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  iconLayout: {
    height: "100%",
    width: "100%",
  },
  recientesPosition: {
    left: 0,
    top: 0,
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.grisClaro,
    borderRadius: Border.br_8xs,
  },
  maskGroupLayout: {
    height: 98,
    width: 96,
  },
  rectanglePosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  selectTypo: {
    color: Color.grisGeneral,
    fontSize: FontSize.size_sm,
    lineHeight: 13,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  image6Icon: {
    width: 87,
    height: 55,
  },
  wrapper: {
    width: 20,
    height: 20,
  },
  subirRecuerdo: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    color: Color.negro,
    marginLeft: 90,
  },
  groupParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon1: {
    overflow: "hidden",
  },
  back: {
    width: 30,
    height: 30,
    marginLeft: 92,
  },
  frameContainer: {
    flexDirection: "row",
  },
  frameChild: {
    height: 420,
    width: 388,
  },
  recientes: {
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    lineHeight: 22,
    fontWeight: "500",
    color: Color.gris,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  stroke1Icon: {
    top: 10,
    left: 85,
    width: 13,
    height: 6,
    position: "absolute",
  },
  recientesParent: {
    width: 98,
    height: 22,
  },
  rectangle: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  multiSelectIcon: {
    width: 19,
    height: 16,
  },
  selectMultiple1: {
    fontSize: FontSize.size_xs,
    marginLeft: 6,
    color: Color.white,
    lineHeight: 13,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  multiSelectIconParent: {
    marginLeft: -75.5,
    top: 7,
    left: "50%",
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
  },
  selectMultiple: {
    width: 175,
    height: 32,
    overflow: "hidden",
  },
  rectangle1: {
    width: 31,
    zIndex: 0,
    height: 32,
  },
  solarcameraOutlineIcon: {
    top: 5,
    left: 5,
    width: 22,
    zIndex: 1,
    position: "absolute",
    height: 20,
    overflow: "hidden",
  },
  rectangleParent: {
    marginLeft: 10,
    flexDirection: "row",
  },
  selectMultipleParent: {
    marginLeft: 74,
    flexDirection: "row",
  },
  frameParent1: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  frameView: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    padding: Padding.p_xl,
    backgroundColor: Color.white,
  },
  frameGroup: {
    marginTop: 6,
    alignItems: "center",
  },
  image6Parent: {
    height: 606,
  },
  maskGroupIcon1: {
    marginLeft: 1,
  },
  recentsSection: {
    height: 195,
    flexWrap: "wrap",
    width: 388,
    flexDirection: "row",
  },
  rectangle2: {
    borderRadius: Border.br_5xs,
    backgroundColor: "rgba(98, 100, 101, 0.56)",
  },
  selectMultiple3: {
    left: 20,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: "50%",
    marginTop: -7,
    color: Color.white,
    lineHeight: 13,
    position: "absolute",
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  selectMultiple4: {
    left: 107,
    top: "50%",
    marginTop: -7,
    color: Color.grisGeneral,
  },
  selectMultiple5: {
    top: 9,
    left: 191,
  },
  selectMultiple2: {
    top: 181,
    left: 145,
    width: 244,
    height: 32,
    position: "absolute",
    overflow: "hidden",
  },
  recentsSectionParent: {
    width: 389,
    height: 213,
  },
  frameParent: {
    alignItems: "center",
  },
  navigationIcon: {
    width: 428,
    height: 105,
    marginTop: 2,
  },
  aadirRecuerdo: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default AadirRecuerdo1;
