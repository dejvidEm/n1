import {
    AestheticMedicineIcon,
    CosmetologyIcon,
    LaserIcon,
    PermanentMakeupIcon,
    BodyTreatmentIcon,
    HairCareIcon,
    PedicureIcon,
    WellnessIcon,
    CoursesIcon,
  } from "@/components/icons/CategoryIcons";
  
  export const categoryIconMap = {
    aestheticMedicine: AestheticMedicineIcon,
    cosmetology: CosmetologyIcon,
    laser: LaserIcon,
    permanentMakeup: PermanentMakeupIcon,
    bodyTreatment: BodyTreatmentIcon,
    hairCare: HairCareIcon,
    pedicure: PedicureIcon,
    wellness: WellnessIcon,
    courses: CoursesIcon,
  } as const;
  
  export type CategoryIconKey = keyof typeof categoryIconMap;