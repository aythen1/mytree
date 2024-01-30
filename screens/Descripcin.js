import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Descripcin = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.descripcin, styles.iconLayout]}>
      <View style={[styles.descripcinChild, styles.navigationIconPosition]} />
      <View style={[styles.backParent, styles.backParentFlexBox]}>
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
        <Text style={styles.descripcin1}>Descripción</Text>
      </View>
      <Image
        style={[styles.image6Icon, styles.backParentPosition]}
        contentFit="cover"
        source={require("../assets/image-6.png")}
      />
      <View
        style={[styles.iconlylightOutlinecalendarParent, styles.frameFlexBox]}
      >
        <Image
          style={styles.back}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinecalendar.png")}
        />
        <Image
          style={[styles.documentIcon, styles.documentIconLayout]}
          contentFit="cover"
          source={require("../assets/document1.png")}
        />
        <Image
          style={styles.documentIconLayout}
          contentFit="cover"
          source={require("../assets/iconlylightoutlinesetting.png")}
        />
      </View>
      <Image
        style={[styles.navigationIcon, styles.navigationIconPosition]}
        contentFit="cover"
        source={require("../assets/navigation.png")}
      />
      <View style={[styles.descripcinInner, styles.backParentPosition]}>
        <View>
          <View>
            <View style={[styles.frameWrapper, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Cuál ha sido tu experiencia más significativa hasta ahora?
                </Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.backParentFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Qué logros personales te enorgullecen?
                </Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.backParentFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  Si pudieras describirte en tres palabras, ¿cuáles serían?
                </Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.backParentFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Qué te hace sonreír y sentirte vivo?
                </Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.backParentFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Cuál es la historia que más te gusta contar sobre ti mismo?
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Qué valores son fundamentales en tu vida?
                </Text>
              </View>
            </View>
            <View style={[styles.frameContainer, styles.backParentFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿En qué áreas sientes que marcas la diferencia?
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Hay alguna experiencia que haya moldeado quién eres hoy?
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.culHaSidoTuExperienciaMWrapper}>
                <Text style={[styles.culHaSido, styles.culHaSidoTypo]}>
                  ¿Qué te hace único en comparación con otras personas?
                </Text>
              </View>
            </View>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.loremIpsumDolorSitAmetCoWrapper}>
                <Text style={[styles.loremIpsumDolor, styles.culHaSidoTypo]}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameChild}
            contentFit="cover"
            source={require("../assets/line-802.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  navigationIconPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  backParentFlexBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  backParentPosition: {
    left: 20,
    position: "absolute",
  },
  frameFlexBox: {
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  documentIconLayout: {
    marginLeft: 30,
    height: 24,
    width: 24,
  },
  culHaSidoTypo: {
    fontWeight: "500",
    lineHeight: 17,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.lato,
  },
  descripcinChild: {
    top: 0,
    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 25,
    elevation: 25,
    shadowOpacity: 1,
    height: 127,
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
  descripcin1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 270,
    marginLeft: 20,
    textAlign: "left",
    fontFamily: FontFamily.lato,
    color: Color.negro,
  },
  backParent: {
    top: 78,
    justifyContent: "center",
    alignItems: "center",
    left: 20,
    position: "absolute",
  },
  image6Icon: {
    top: 3,
    width: 87,
    height: 55,
  },
  documentIcon: {
    overflow: "hidden",
  },
  iconlylightOutlinecalendarParent: {
    top: 20,
    left: 276,
    position: "absolute",
    justifyContent: "flex-end",
  },
  navigationIcon: {
    top: 821,
    height: 105,
  },
  culHaSido: {
    color: Color.negro,
    fontWeight: "500",
    lineHeight: 17,
    letterSpacing: 0,
    fontSize: FontSize.size_sm,
  },
  culHaSidoTuExperienciaMWrapper: {
    width: 347,
  },
  frameWrapper: {
    alignItems: "center",
  },
  loremIpsumDolor: {
    color: Color.grisGeneral,
    width: 388,
  },
  loremIpsumDolorSitAmetCoWrapper: {
    width: 388,
  },
  frameContainer: {
    marginTop: 20,
    width: 388,
    alignItems: "center",
  },
  frameView: {
    marginTop: 20,
    alignItems: "center",
  },
  frameChild: {
    height: 0,
    marginTop: 20,
    width: 388,
  },
  descripcinInner: {
    top: 147,
    height: 655,
  },
  descripcin: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default Descripcin;
