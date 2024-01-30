import * as React from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const MiSalud = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.miSalud, styles.iconLayout]}>
      <View style={[styles.miSaludChild, styles.miSaludChildPosition]} />
      <View style={[styles.backParent, styles.frameFlexBox1]}>
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
        <Text style={[styles.miSalud1, styles.miSalud1Typo]}>Mi Salud</Text>
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
        style={[styles.navigationIcon, styles.miSaludChildPosition]}
        contentFit="cover"
        source={require("../assets/navigation.png")}
      />
      <View style={[styles.miSaludInner, styles.backParentPosition]}>
        <View>
          <View style={[styles.frameWrapper, styles.frameFlexBox1]}>
            <View style={[styles.frameContainer, styles.frameFlexBox1]}>
              <Image
                style={styles.frameChild}
                contentFit="cover"
                source={require("../assets/frame-1171275011.png")}
              />
            </View>
          </View>
          <View style={styles.frameGroup}>
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con dolor de garganta
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con resfriado
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con infección de oido
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con gripe
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con gastroenteritis
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con migraña
                </Text>
              </View>
            </View>
            <View style={[styles.frameWrapper1, styles.frameFlexBox]}>
              <View style={styles.conDolorDeGargantaWrapper}>
                <Text style={[styles.conDolorDe, styles.miSalud1Typo]}>
                  Con alergias
                </Text>
              </View>
            </View>
          </View>
          <Image
            style={styles.frameItem}
            contentFit="cover"
            source={require("../assets/line-801.png")}
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
  miSaludChildPosition: {
    width: 428,
    left: 0,
    position: "absolute",
  },
  frameFlexBox1: {
    flexDirection: "row",
    alignItems: "center",
  },
  miSalud1Typo: {
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
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
  miSaludChild: {
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
  miSalud1: {
    fontSize: FontSize.size_5xl,
    fontWeight: "700",
    width: 270,
    marginLeft: 20,
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
    height: 55,
    width: 87,
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
  frameChild: {
    height: 19,
    width: 87,
  },
  frameContainer: {
    width: 87,
    alignItems: "center",
  },
  frameWrapper: {
    width: 388,
    alignItems: "center",
  },
  conDolorDe: {
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    lineHeight: 17,
    fontWeight: "500",
  },
  conDolorDeGargantaWrapper: {
    width: 347,
  },
  frameView: {
    alignItems: "center",
  },
  frameWrapper1: {
    marginTop: 20,
    alignItems: "center",
  },
  frameGroup: {
    marginTop: 20,
  },
  frameItem: {
    maxHeight: "100%",
    marginTop: 20,
    width: 388,
  },
  miSaludInner: {
    top: 147,
    height: 655,
  },
  miSalud: {
    borderRadius: Border.br_31xl,
    flex: 1,
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.white,
  },
});

export default MiSalud;
