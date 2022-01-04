import { useEffect, useRef } from "react";
export default function InvitePage():JSX.Element {
    const focusRef = useRef<HTMLHeadingElement>(null);
    useEffect(()=> {
      focusRef?.current?.focus();
    })
    return (
        <div>
            
        </div>
    )
}
