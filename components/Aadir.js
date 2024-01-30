import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Aadir = ({ onClose }) => {
  return (
    <View style={styles.aadir}>
      <Image
        style={[styles.aadirChild, styles.aadirPosition]}
        contentFit="cover"
        source={require("../assets/line-812.png")}
      />
      <Image
        style={[styles.aadirItem, styles.aadirPosition]}
        contentFit="cover"
        source={require("../assets/line-812.png")}
      />
      <Text style={[styles.buscarTema, styles.buscarTemaTypo]}>
        Buscar : Tema relacionado
      </Text>
      <Text style={[styles.comentarios, styles.buscarTemaTypo]}>
        438 comentarios
      </Text>
      <View style={[styles.frameParent, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-15477548754.png")}
          />
          <View style={styles.frameContainer}>
            <View>
              <Text style={styles.brunoPham}>Bruno Pham</Text>
              <Text style={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.daParent, styles.parentFrameFlexBox]}>
                <Text style={styles.daTypo}>1 día</Text>
                <Text style={[styles.responder, styles.daTypo]}>Responder</Text>
              </View>
              <View style={[styles.frameParent1, styles.parentFrameFlexBox]}>
                <View style={styles.vectorParentFlexBox}>
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/vector41.png")}
                  />
                  <Text style={[styles.text, styles.daTypo]}>1812</Text>
                </View>
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.vectorParentFlexBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-82.png")}
          />
          <Text style={[styles.ver11Respuestas, styles.daTypo]}>
            Ver 11 respuestas
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent2, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-15477548754.png")}
          />
          <View style={styles.frameContainer}>
            <View>
              <Text style={styles.brunoPham}>Bruno Pham</Text>
              <Text style={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.daParent, styles.parentFrameFlexBox]}>
                <Text style={styles.daTypo}>1 día</Text>
                <Text style={[styles.responder, styles.daTypo]}>Responder</Text>
              </View>
              <View style={[styles.frameParent1, styles.parentFrameFlexBox]}>
                <View style={styles.vectorParentFlexBox}>
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/vector41.png")}
                  />
                  <Text style={[styles.text, styles.daTypo]}>1812</Text>
                </View>
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.vectorParentFlexBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-82.png")}
          />
          <Text style={[styles.ver11Respuestas, styles.daTypo]}>
            Ver 11 respuestas
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent7, styles.frameParentPosition]}>
        <View style={[styles.frameGroup, styles.parentFrameFlexBox]}>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/frame-15477548754.png")}
          />
          <View style={styles.frameContainer}>
            <View>
              <Text style={styles.brunoPham}>Bruno Pham</Text>
              <Text style={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet consectetur
              </Text>
            </View>
            <View style={styles.frameView}>
              <View style={[styles.daParent, styles.parentFrameFlexBox]}>
                <Text style={styles.daTypo}>1 día</Text>
                <Text style={[styles.responder, styles.daTypo]}>Responder</Text>
              </View>
              <View style={[styles.frameParent1, styles.parentFrameFlexBox]}>
                <View style={styles.vectorParentFlexBox}>
                  <Image
                    style={styles.iconLayout}
                    contentFit="cover"
                    source={require("../assets/vector41.png")}
                  />
                  <Text style={[styles.text, styles.daTypo]}>1812</Text>
                </View>
                <Image
                  style={[styles.groupIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.vectorGroup, styles.vectorParentFlexBox]}>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-82.png")}
          />
          <Text style={[styles.ver11Respuestas, styles.daTypo]}>
            Ver 11 respuestas
          </Text>
        </View>
      </View>
      <View style={[styles.frameParent12, styles.vectorParentFlexBox]}>
        <Image
          style={styles.frameChild2}
          contentFit="cover"
          source={require("../assets/frame-15477548755.png")}
        />
        <View style={styles.field}>
          <View style={[styles.placeholderInput, styles.parentFrameFlexBox]}>
            <Text style={styles.search}>Añadir comentario...</Text>
          </View>
          <Image
            style={styles.vectorIcon3}
            contentFit="cover"
            source={require("../assets/vector42.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector43.png")}
          />
          <Image
            style={[styles.vectorIcon5, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector44.png")}
          />
        </View>
      </View>
      <View style={[styles.parent, styles.parentFrameFlexBox]}>
        <Text style={styles.text3}>{`😳 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>{`😊 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>{`😄 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>{`🥰 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>{`😉 `}</Text>
        <Text style={[styles.text8, styles.textTypo]}>{`😞 `}</Text>
        <Text style={[styles.text8, styles.textTypo]}>{`😢 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>{`😠 `}</Text>
        <Text style={[styles.text4, styles.textTypo]}>{`😮‍💨 `}</Text>
        <Text style={[styles.text8, styles.textTypo]}>{`🫤 `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  aadirPosition: {
    marginLeft: -214,
    left: "50%",
    position: "absolute",
    maxHeight: "100%",
    width: 428,
  },
  buscarTemaTypo: {
    textAlign: "justify",
    fontFamily: FontFamily.lato,
    fontWeight: "600",
    lineHeight: 19,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    color: Color.white,
    position: "absolute",
  },
  frameParentPosition: {
    height: 64,
    width: 385,
    marginLeft: -192,
    left: "50%",
    position: "absolute",
  },
  parentFrameFlexBox: {
    flexDirection: "row",
    position: "absolute",
  },
  daTypo: {
    lineHeight: 10,
    fontSize: FontSize.size_5xs,
    color: Color.gris,
    fontWeight: "500",
    textAlign: "justify",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  iconLayout: {
    width: 12,
    height: 12,
  },
  vectorParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIconLayout: {
    overflow: "hidden",
    bottom: "31.58%",
    top: "31.58%",
    width: "3.89%",
    height: "36.84%",
    position: "absolute",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  textTypo: {
    marginLeft: 15,
    lineHeight: 30,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  aadirChild: {
    top: 50,
    left: "50%",
  },
  aadirItem: {
    top: 351,
    left: "50%",
  },
  buscarTema: {
    top: 16,
    left: 28,
  },
  comentarios: {
    marginLeft: -59,
    top: 65,
    left: "50%",
  },
  frameChild: {
    width: 30,
    height: 30,
  },
  brunoPham: {
    fontSize: FontSize.size_3xs,
    lineHeight: 12,
    color: Color.gris,
    fontWeight: "500",
    textAlign: "justify",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  loremIpsumDolor: {
    fontSize: FontSize.size_xs,
    lineHeight: 14,
    color: Color.grisDiscord,
    marginTop: 2,
    fontWeight: "500",
    textAlign: "justify",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  responder: {
    marginLeft: 13,
  },
  daParent: {
    top: 1,
    left: 0,
    flexDirection: "row",
  },
  text: {
    marginLeft: 4,
  },
  groupIcon: {
    marginLeft: 14,
  },
  frameParent1: {
    left: 285,
    top: 0,
  },
  frameView: {
    width: 346,
    marginTop: 7,
    height: 12,
  },
  frameContainer: {
    marginLeft: 9,
  },
  frameGroup: {
    left: 0,
    flexDirection: "row",
    top: 0,
  },
  frameItem: {
    width: 27,
    maxHeight: "100%",
  },
  ver11Respuestas: {
    marginLeft: 5,
  },
  vectorGroup: {
    top: 54,
    left: 40,
    position: "absolute",
  },
  frameParent: {
    top: 99,
  },
  frameParent2: {
    top: 183,
  },
  frameParent7: {
    top: 267,
  },
  frameChild2: {
    width: 35,
    height: 35,
  },
  search: {
    lineHeight: 24,
    color: Color.textPlaceholder,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
    fontSize: FontSize.size_base,
  },
  placeholderInput: {
    top: 7,
    left: 20,
    width: 282,
  },
  vectorIcon3: {
    top: 12,
    left: 331,
    width: 14,
    height: 14,
    position: "absolute",
  },
  vectorIcon4: {
    right: "14.72%",
    left: "81.39%",
  },
  vectorIcon5: {
    right: "9.44%",
    left: "86.67%",
  },
  field: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.fAFAFA,
    width: 360,
    height: 38,
    marginLeft: 5,
  },
  frameParent12: {
    top: 401,
    left: 13,
    position: "absolute",
  },
  text3: {
    color: Color.negro,
    lineHeight: 30,
    fontSize: FontSize.size_6xl,
    textAlign: "left",
    fontWeight: "500",
    fontFamily: FontFamily.lato,
    letterSpacing: 0,
  },
  text4: {
    color: Color.negro,
  },
  text8: {
    color: Color.white,
    marginLeft: 15,
  },
  parent: {
    top: 361,
    marginLeft: -192,
    flexDirection: "row",
    left: "50%",
  },
  aadir: {
    borderRadius: Border.br_11xl,
    backgroundColor: Color.secundario,
    height: 455,
    maxHeight: "100%",
    maxWidth: "100%",
    width: 428,
  },
});

export default Aadir;
