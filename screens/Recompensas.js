import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Padding, Color, Border, FontSize } from "../GlobalStyles";

const Recompensas = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.recompensas, styles.iconLayout]}>
      <Image
        style={[styles.navigationIcon, styles.navigationIconPosition]}
        contentFit="cover"
        source={require("../assets/navigation10.png")}
      />
      <View style={[styles.recompensasChild, styles.navigationIconPosition]} />
      <Image
        style={styles.image6Icon}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View style={styles.backParent}>
        <Pressable
          style={styles.backLayout}
          onPress={() => navigation.navigate("MUROINFORMACIN")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back.png")}
          />
        </Pressable>
        <Text style={[styles.recompensas1, styles.ptsTypo]}>Recompensas</Text>
      </View>
      <View style={styles.accinPorRecompensaParent}>
        <Text style={[styles.accinPorRecompensa, styles.ptsTypo]}>
          Acción por recompensa
        </Text>
        <View style={styles.entradaAlDiarioDeFormaPbParent}>
          <Text style={[styles.entradaAlDiario, styles.ptsTypo]}>
            Entrada al diario de forma pública
          </Text>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-7170.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>10 pts</Text>
            </View>
            <View style={[styles.frameContainer, styles.frameBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71701.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector24.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>30</Text>
            </View>
            <View style={[styles.frameContainer, styles.frameBorder]}>
              <View style={styles.frameWrapper}>
                <View style={styles.ellipseParent}>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-71702.png")}
                  />
                  <Image
                    style={[styles.vectorIcon, styles.backLayout]}
                    contentFit="cover"
                    source={require("../assets/vector25.png")}
                  />
                </View>
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>200</Text>
            </View>
            <View style={[styles.frameParent1, styles.frameBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71703.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector26.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>1.000</Text>
            </View>
            <View style={[styles.frameParent1, styles.frameBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71704.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector27.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>2.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.interactuarConElMuroParent}>
          <Text style={[styles.entradaAlDiario, styles.ptsTypo]}>
            Interactuar con el muro
          </Text>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-7170.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>1 pts</Text>
            </View>
            <View style={[styles.frameParent5, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71701.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector24.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>50</Text>
            </View>
            <View style={[styles.frameParent5, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71702.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector25.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>3.000</Text>
            </View>
            <View style={[styles.frameParent7, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71703.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector26.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>30.000</Text>
            </View>
            <View style={[styles.frameParent7, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71705.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector28.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>100.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.interactuarConElMuroParent}>
          <Text style={[styles.entradaAlDiario, styles.ptsTypo]}>
            Creación de reto
          </Text>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-7170.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>20 pts</Text>
            </View>
            <View style={[styles.frameParent5, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71701.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector24.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>30</Text>
            </View>
            <View style={[styles.frameParent5, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71702.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector25.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>200</Text>
            </View>
            <View style={[styles.frameParent7, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71703.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector26.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>1.000</Text>
            </View>
            <View style={[styles.frameParent7, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71704.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector27.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>2.000</Text>
            </View>
          </View>
        </View>
        <View style={styles.interactuarConElMuroParent}>
          <Text style={[styles.entradaAlDiario, styles.ptsTypo]}>
            Votación de retos
          </Text>
          <View style={styles.frameParent}>
            <View style={styles.frameGroup}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-7170.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector9.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>1 pts</Text>
            </View>
            <View style={[styles.frameParent17, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71706.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector24.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>1</Text>
            </View>
            <View style={[styles.frameParent5, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71702.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector25.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>1.000</Text>
            </View>
            <View style={[styles.frameParent7, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71703.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector26.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>5.000</Text>
            </View>
            <View style={[styles.frameParent7, styles.frameParentBorder]}>
              <View style={styles.ellipseParent}>
                <Image
                  style={styles.frameChild}
                  contentFit="cover"
                  source={require("../assets/ellipse-71705.png")}
                />
                <Image
                  style={[styles.vectorIcon, styles.backLayout]}
                  contentFit="cover"
                  source={require("../assets/vector28.png")}
                />
              </View>
              <Text style={[styles.pts, styles.ptsTypo]}>500.000</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    overflow: "hidden",
    width: "100%",
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  ptsTypo: {
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  backLayout: {
    height: 24,
    width: 24,
  },
  frameBorder: {
    marginLeft: 11,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.primario1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  frameParentBorder: {
    marginLeft: 6,
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.primario1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    alignItems: "center",
    overflow: "hidden",
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  recompensasChild: {
    top: 1,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 126,
    backgroundColor: Color.white,
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
    left: 20,
    position: "absolute",
  },
  icon: {
    height: "100%",
  },
  recompensas1: {
    marginLeft: 20,
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  backParent: {
    top: 78,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  accinPorRecompensa: {
    color: Color.primario1,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    fontWeight: "700",
    fontSize: FontSize.size_5xl,
  },
  entradaAlDiario: {
    fontSize: FontSize.size_xl,
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameChild: {
    width: 35,
    height: 35,
    zIndex: 0,
  },
  vectorIcon: {
    top: 6,
    left: 6,
    zIndex: 1,
    position: "absolute",
  },
  ellipseParent: {
    flexDirection: "row",
  },
  pts: {
    fontSize: FontSize.size_base,
    marginTop: 3,
    color: Color.negro,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  frameGroup: {
    paddingVertical: Padding.p_5xs,
    borderWidth: 1,
    borderColor: Color.primario1,
    borderStyle: "solid",
    borderRadius: Border.br_3xs,
    paddingHorizontal: Padding.p_xs,
    alignItems: "center",
    overflow: "hidden",
  },
  frameContainer: {
    paddingHorizontal: Padding.p_mid,
  },
  frameWrapper: {
    flexDirection: "row",
  },
  frameParent1: {
    paddingHorizontal: Padding.p_sm,
  },
  frameParent: {
    marginTop: 20,
    flexDirection: "row",
  },
  entradaAlDiarioDeFormaPbParent: {
    width: 389,
    marginTop: 20,
  },
  frameParent5: {
    paddingHorizontal: Padding.p_mid,
  },
  frameParent7: {
    paddingHorizontal: Padding.p_sm,
  },
  interactuarConElMuroParent: {
    marginTop: 20,
  },
  frameParent17: {
    paddingHorizontal: Padding.p_xs,
    marginLeft: 6,
  },
  accinPorRecompensaParent: {
    marginLeft: -197,
    top: 147,
    left: "50%",
    position: "absolute",
  },
  recompensas: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    backgroundColor: Color.white,
  },
});

export default Recompensas;
