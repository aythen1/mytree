import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const MIDIARIOEDICINVIDEO2 = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.miDiarioEdicinVideo, styles.iconLayout]}>
      <Pressable
        style={[styles.frameParent, styles.framePosition]}
        onPress={() => navigation.navigate("MIDIARIOEDICINVIDEO1")}
      >
        <View style={styles.backParent}>
          <Pressable
            style={styles.backLayout}
            onPress={() => navigation.navigate("MIDIARIOENTRADAVIDEO")}
          >
            <Image
              style={[styles.icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/back6.png")}
            />
          </Pressable>
          <Text style={[styles.editarFoto, styles.filtroTypo]}>
            Editar foto
          </Text>
        </View>
        <Pressable
          style={[styles.back1, styles.backLayout]}
          onPress={() => navigation.navigate("MIDIARIOEDICINVIDEO1")}
        >
          <Image
            style={[styles.icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/back7.png")}
          />
        </Pressable>
      </Pressable>
      <Image
        style={[styles.clarityresizeUpLineIcon, styles.framePosition]}
        contentFit="cover"
        source={require("../assets/clarityresizeupline.png")}
      />
      <Text style={[styles.filtro, styles.filtroPosition]}>FILTRO</Text>
      <Pressable
        style={[styles.edicin, styles.filtroPosition]}
        onPress={() => navigation.navigate("MIDIARIOEDICINVIDEO1")}
      >
        <Text style={[styles.edicin1, styles.normalTypo]}>EDICIÓN</Text>
      </Pressable>
      <View style={[styles.miDiarioEdicinVideoChild, styles.iconPosition]} />
      <View style={[styles.frameGroup, styles.framePosition]}>
        <View style={[styles.rectangleParent, styles.frameParentShadowBox]}>
          <LinearGradient
            style={styles.frameChildLayout}
            locations={[0, 1]}
            colors={["#e2e57a", "#7fc08b"]}
          />
          <Text style={[styles.normal, styles.normalTypo]}>Normal</Text>
        </View>
        <View style={[styles.filtro1, styles.frameParentShadowBox]}>
          <LinearGradient
            style={styles.frameChildLayout}
            locations={[0, 1]}
            colors={["#e2e57a", "#7fc08b"]}
          />
          <Text style={[styles.normal, styles.normalTypo]}>Sepia</Text>
        </View>
        <View style={[styles.rectangleGroup, styles.frameParentShadowBox]}>
          <LinearGradient
            style={[styles.frameItem, styles.frameChildLayout]}
            locations={[0, 1]}
            colors={["#e2e57a", "#7fc08b"]}
          />
          <Text style={[styles.normal, styles.normalTypo]}>Claro</Text>
        </View>
        <View style={[styles.rectangleContainer, styles.frameParentShadowBox]}>
          <LinearGradient
            style={styles.frameChildLayout}
            locations={[0, 1]}
            colors={["#e2e57a", "#7fc08b"]}
          />
          <Text style={[styles.normal, styles.normalTypo]}>Oscuro</Text>
        </View>
        <View style={[styles.frameView, styles.frameParentShadowBox]}>
          <LinearGradient
            style={styles.frameChildLayout}
            locations={[0, 1]}
            colors={["#e2e57a", "#7fc08b"]}
          />
          <Text style={[styles.normal, styles.normalTypo]}>Contraste</Text>
        </View>
        <View style={[styles.rectangleParent1, styles.frameParentShadowBox]}>
          <LinearGradient
            style={styles.frameChildLayout}
            locations={[0, 1]}
            colors={["#e2e57a", "#7fc08b"]}
          />
          <Text style={[styles.normal, styles.normalTypo]}>{`B&N`}</Text>
        </View>
        <View style={styles.frameContainer}>
          <View style={[styles.rectangleParent2, styles.frameParentShadowBox]}>
            <LinearGradient
              style={styles.frameChildLayout}
              locations={[0, 1]}
              colors={["#e2e57a", "#7fc08b"]}
            />
            <Text style={[styles.normal, styles.normalTypo]}>Normal</Text>
          </View>
          <View style={[styles.rectangleParent3, styles.frameParentShadowBox]}>
            <LinearGradient
              style={[styles.frameChild3, styles.frameChildLayout]}
              locations={[0, 1]}
              colors={["#e2e57a", "#7fc08b"]}
            />
            <Text style={[styles.normal, styles.normalTypo]}>Claro</Text>
          </View>
          <View style={[styles.rectangleParent4, styles.frameParentShadowBox]}>
            <LinearGradient
              style={styles.frameChildLayout}
              locations={[0, 1]}
              colors={["#e2e57a", "#7fc08b"]}
            />
            <Text style={[styles.normal, styles.normalTypo]}>Oscuro</Text>
          </View>
          <View style={[styles.rectangleParent5, styles.frameParentShadowBox]}>
            <LinearGradient
              style={styles.frameChildLayout}
              locations={[0, 1]}
              colors={["#e2e57a", "#7fc08b"]}
            />
            <Text style={[styles.normal, styles.normalTypo]}>Contraste</Text>
          </View>
          <View style={[styles.rectangleParent6, styles.frameParentShadowBox]}>
            <LinearGradient
              style={styles.frameChildLayout}
              locations={[0, 1]}
              colors={["#e2e57a", "#7fc08b"]}
            />
            <Text style={[styles.normal, styles.normalTypo]}>{`B&N`}</Text>
          </View>
        </View>
      </View>
      <View style={[styles.rectangleParent7, styles.rectangleLayout]}>
        <View style={[styles.rectangleView, styles.rectangleLayout]} />
        <Image
          style={[styles.vectorIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/vector39.png")}
        />
      </View>
      <Image
        style={[styles.navigationIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/navigation25.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  framePosition: {
    left: 20,
    position: "absolute",
  },
  filtroTypo: {
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  backLayout: {
    height: 30,
    width: 30,
  },
  filtroPosition: {
    top: 627,
    position: "absolute",
  },
  normalTypo: {
    textAlign: "center",
    fontFamily: FontFamily.lato,
  },
  iconPosition: {
    left: "50%",
    position: "absolute",
  },
  frameParentShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  frameChildLayout: {
    backgroundColor: Color.linearBoton,
    height: 70,
    width: 70,
    borderRadius: Border.br_3xs,
  },
  rectangleLayout: {
    height: 537,
    width: 426,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  editarFoto: {
    fontSize: FontSize.size_5xl,
    marginLeft: 20,
  },
  backParent: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  back1: {
    marginLeft: 181,
  },
  frameParent: {
    top: 20,
    flexDirection: "row",
  },
  clarityresizeUpLineIcon: {
    top: 556,
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  filtro: {
    left: 67,
    fontSize: FontSize.title2Regular_size,
    textAlign: "left",
    color: Color.negro,
    fontFamily: FontFamily.lato,
    fontWeight: "700",
  },
  edicin1: {
    fontWeight: "500",
    color: Color.grisGeneral,
    fontSize: FontSize.title2Regular_size,
  },
  edicin: {
    left: 275,
  },
  miDiarioEdicinVideoChild: {
    marginLeft: -216.5,
    top: 671,
    borderStyle: "solid",
    borderColor: Color.primario1,
    borderTopWidth: 5,
    width: 219,
    height: 5,
  },
  normal: {
    fontSize: FontSize.size_base,
    fontWeight: "300",
    color: Color.primary,
    marginTop: 8,
  },
  rectangleParent: {
    alignItems: "center",
  },
  filtro1: {
    marginLeft: 20,
    alignItems: "center",
  },
  frameItem: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleGroup: {
    marginLeft: 20,
    alignItems: "center",
  },
  rectangleContainer: {
    marginLeft: 20,
    alignItems: "center",
  },
  frameView: {
    marginLeft: 20,
    alignItems: "center",
  },
  rectangleParent1: {
    marginLeft: 20,
    alignItems: "center",
  },
  rectangleParent2: {
    alignItems: "center",
  },
  frameChild3: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  rectangleParent3: {
    marginLeft: 20,
    alignItems: "center",
  },
  rectangleParent4: {
    marginLeft: 20,
    alignItems: "center",
  },
  rectangleParent5: {
    marginLeft: 20,
    alignItems: "center",
  },
  rectangleParent6: {
    marginLeft: 20,
    alignItems: "center",
  },
  frameContainer: {
    marginLeft: 20,
    flexDirection: "row",
  },
  frameGroup: {
    top: 693,
    flexDirection: "row",
  },
  rectangleView: {
    backgroundColor: Color.secundario,
    zIndex: 0,
  },
  vectorIcon: {
    marginTop: -28.5,
    marginLeft: -40,
    top: "50%",
    width: 78,
    height: 63,
    zIndex: 1,
  },
  rectangleParent7: {
    top: 70,
    left: 2,
    flexDirection: "row",
    position: "absolute",
    width: 426,
  },
  navigationIcon: {
    marginLeft: -214,
    top: 821,
    width: 428,
    height: 105,
  },
  miDiarioEdicinVideo: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 926,
    overflow: "hidden",
  },
});

export default MIDIARIOEDICINVIDEO2;
